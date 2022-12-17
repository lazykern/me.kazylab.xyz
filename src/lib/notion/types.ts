export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface External {
  url: string;
}

export interface Cover {
  type: string;
  external: External;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Published {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export type Tag = MultiSelect;

export interface Tags {
  id: string;
  type: string;
  multi_select: Tag[];
}

export interface Date {
  id: string;
  type: string;
  last_edited_time: string;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Description {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

export interface Properties {
  Description: Description;
  Published: Published;
  Tags: Tags;
  Date: Date;
  Name: Name;
}

export interface BlogObjectResponse {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover?: Cover | null;
  icon?: Icon | null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface DescriptionObjectResponse {
  object: string;
  type: string;
  id: string;
  rich_text: RichText;
}

export interface NameObjectResponse {
  object: string;
  type: string;
  id: string;
  title: Title;
}
