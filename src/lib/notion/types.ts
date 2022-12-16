export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface File {
  url: string;
  expiry_time: Date;
}

export interface External {
  url: string;
}

export interface Cover {
  type: string;
  file: File;
  external: External;
}

export interface Icon {
  type: string;
  external: External;
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

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
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

export interface Properties {
  published: Published;
  tags: Tags;
  name: Name;
}
