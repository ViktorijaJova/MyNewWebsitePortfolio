import { Url } from "url";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlogBlogBlocksDynamicZoneInput: any;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  Long: any;
  PagePageBlocksDynamicZoneInput: any;
  Upload: any;
};

export enum Enum_Componentpagecomponentstitle_Aligment {
  Center = "center",
  Left = "left",
  Right = "right",
}

export enum Enum_Componentpagecomponentstitle_Fontsize {
  Big = "big",
  Small = "small",
}

export enum Enum_Componentpagecomponentstitle_Fontcolor {
  GalacticBlue = "galacticBlue",
  White = "white",
}

export enum Enum_Componentpageblocksdescription_Alignment {
  Center = "center",
  Left = "left",
  Right = "right",
}

export enum Enum_Componentpageblocksspacing_Sizeheight {
  L = "l",
  M = "m",
  S = "s",
  Xl = "xl",
  Xs = "xs",
  Xxl = "xxl",
  Xxxl = "xxxl",
}
export enum Enum_Componentpageblocksdescription_Fontcolor {
  LightGrey = "lightGrey",
  White = "white",
}

export type ComponentPageComponentsTitle = {
  __typename?: "ComponentPageComponentsTitle";
  aligment?: Maybe<Enum_Componentpagecomponentstitle_Aligment>;
  title?: Maybe<Scalars["String"]>;
  fontSize?: Maybe<Enum_Componentpagecomponentstitle_Fontsize>;
  fontColor?: Maybe<Enum_Componentpagecomponentstitle_Fontcolor>;
  id: Scalars["ID"];
};

export type ComponentPageBlocksTitle = {
  __typename?: "ComponentPageBlocksTitle";
  componentTitle?: Maybe<ComponentPageComponentsTitle>;
  id: Scalars["ID"];
};

export type ComponentPageBlocksDescription = {
  __typename?: "ComponentPageBlocksDescription";
  alignment?: Maybe<Enum_Componentpageblocksdescription_Alignment>;
  description?: Maybe<Scalars["String"]>;
  fontColor?: Maybe<Enum_Componentpageblocksdescription_Fontcolor>;
  id: Scalars["ID"];
};

export type ComponentPageBlocksSpacing = {
  __typename?: "ComponentPageBlocksSpacing";
  id: Scalars["ID"];
  sizeHeight?: Maybe<Enum_Componentpageblocksspacing_Sizeheight>;
};
export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};
export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};
export type ComponentPageComponentsUserCard = {
  __typename?: "ComponentPageComponentsUserCard";
  id: Scalars["ID"];
  icon?: Maybe<UploadFileEntityResponse>;
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  linkText?: Maybe<Scalars["String"]>;
};

export type ComponentPageBlocksUserCard = {
  __typename?: "ComponentPageBlocksUserCard";
  cards?: Maybe<Array<Maybe<ComponentPageComponentsUserCard>>>;
  id: Scalars["ID"];
};

export type ComponentPageBlocksContactBanner = {
  __typename?: "ComponentPageBlocksContactBanner";
  button?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars["String"]>;
};

export type VideoBannerBlock = {
  videoData: {
    ytid: string;
    link: string;
    cta: string;
    img: any;
  }[];
};

export type ComponentPageBlocksHero = {
  __typename?: 'ComponentPageBlocksHero';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type GenericMorph =
  | ComponentPageBlocksTitle
  | ComponentPageBlocksDescription
  | ComponentPageComponentsTitle
  | ComponentPageBlocksSpacing
  | UploadFileEntity
  | UploadFile
  | ComponentPageComponentsUserCard
  | UploadFileEntityResponse
  |ComponentPageBlocksUserCard
  | ComponentPageBlocksContactBanner
  | Error;

export type PagePageBlocksDynamicZone =
  | ComponentPageBlocksTitle
  | ComponentPageBlocksDescription
  | ComponentPageComponentsTitle
  | ComponentPageBlocksSpacing
  | UploadFileEntity
  | UploadFileEntityResponse
  | ComponentPageComponentsUserCard
  |ComponentPageBlocksUserCard
  | ComponentPageBlocksContactBanner
  | UploadFile
  | Error;
