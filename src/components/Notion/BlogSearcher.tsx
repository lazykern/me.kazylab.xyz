import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Chip,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { BlogObjectResponse, MultiSelect } from "../../lib/notion/types";
import Highlighter from "react-highlight-words";

import {
  extractAllTags,
  filterBlogByQuery,
  filterBlogByTagNames,
} from "../../lib/notion/utils";
import Link from "next/link";

const BlogSearcher = ({
  blogObjects,
}: {
  blogObjects: BlogObjectResponse[];
}) => {
  const tagOptions = extractAllTags(blogObjects);

  const [query, setQuery] = useState<string>("");
  const [tags, setTags] = useState<MultiSelect[]>([]);

  useState<BlogObjectResponse[]>(blogObjects);

  const queryInput = (
    <Input
      placeholder={"Blog name or tags"}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );

  const tagInput = (
    <Autocomplete
      disablePortal
      multiple
      filterSelectedOptions
      options={tagOptions}
      getOptionLabel={(option) => option.name}
      value={tags}
      onChange={(_, value) => {
        setTags(value);
      }}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option.id}
            label={option.name}
            sx={{ background: `var(--notion-item-${option.color})` }}
          />
        ));
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <Chip
            label={option.name}
            sx={{ background: `var(--notion-item-${option.color})` }}
          />
        </li>
      )}
      renderInput={(props) => {
        return <TextField {...props} placeholder={"Tags"} />;
      }}
    />
  );

  return (
    <Stack spacing={3}>
      {queryInput}
      {tagInput}

      {filterBlogByTagNames(
        filterBlogByQuery(blogObjects, query),
        tags.map((tag) => tag.name)
      ).map((blog) => {
        return (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <Card sx={{ display: "flex" }} className={"blog-card"}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="body2" pl="5px">
                    <span>{blog.icon?.emoji}</span>{" "}
                    <Highlighter
                      highlightClassName="highlight"
                      searchWords={[query]}
                      autoEscape={true}
                      textToHighlight={blog.properties.Name.title[0].plain_text}
                    />
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      pt: 1,
                    }}
                  >
                    {blog.properties.Tags.multi_select.map((tag) => (
                      <Box
                        key={tag.id}
                        sx={{
                          mr: "5px",
                        }}
                      >
                        <Chip
                          label={
                            <Highlighter
                              highlightClassName="highlight"
                              searchWords={[
                                ...query.split(" "),
                                ...tags.map((t) => t.name),
                              ]}
                              autoEscape={true}
                              textToHighlight={tag.name}
                            />
                          }
                          sx={{
                            background: `var(--notion-item-${tag.color})`,
                            borderRadius: "5px",
                          }}
                          size="small"
                        />
                      </Box>
                    ))}
                  </Box>
                  <Typography
                    color="text.secondary"
                    pl="5px"
                    sx={{ fontSize: "12px" }}
                    pt="10px"
                  >
                    {new Date(
                      blog.properties.Date.last_edited_time
                    ).toLocaleString()}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Link>
        );
      })}
    </Stack>
  );
};

export default BlogSearcher;
