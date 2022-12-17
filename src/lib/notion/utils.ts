import { BlogObjectResponse, Tag } from "./types";

export const extractAllTags = (blogObject: BlogObjectResponse[]): Tag[] => {
  const tags: Tag[] = [];
  blogObject.forEach((blog) => {
    blog.properties.Tags.multi_select.forEach((tag) => {
      if (!tags.find((t) => t.id === tag.id)) {
        tags.push(tag);
      }
    });
  });
  return tags;
};

export const filterBlogByTagIds = (
  blogObject: BlogObjectResponse[],
  tagIds: string[]
): BlogObjectResponse[] => {
  return blogObject.filter((blog) => {
    const blogTagIds = blog.properties.Tags.multi_select.map((tag) => tag.id);
    return tagIds.every((tagId) => blogTagIds.includes(tagId));
  });
};

export const filterBlogByTagNames = (
  blogObject: BlogObjectResponse[],
  tagNames: string[]
): BlogObjectResponse[] => {
  return blogObject.filter((blog) => {
    const blogTagNames = blog.properties.Tags.multi_select.map(
      (tag) => tag.name
    );
    return tagNames.every((tagName) => blogTagNames.includes(tagName));
  });
};

export const filterBlogByQuery = (
  blogObject: BlogObjectResponse[],
  query: string
) => {
  const queryTags = query.split(" ");
  return blogObject.filter((blog) => {
    const blogName = blog.properties.Name.title[0].plain_text;
    const blogTags = blog.properties.Tags.multi_select.map((tag) => tag.name);
    return (
      blogName.toLowerCase().includes(query.toLowerCase()) ||
      queryTags.every((tag) => blogTags.includes(tag))
    );
  });
};
