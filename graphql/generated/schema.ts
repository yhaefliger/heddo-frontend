import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  Binary: any;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  DatetimeIso8601: any;
  Integer: any;
  Map: any;
  MapArray: any;
  Timespan: any;
  /**
   * The `Int` scalar type represents non-fractional signed whole numeric
   * values. Int can represent values between -(2^31) and 2^31 - 1.
   */
  Timestamp: any;
  Upload: any;
  metatag: any;
};

/** The available display modes for 'Block' entities. */
export enum BlockDisplayModeId {
  /** The 'Token' display mode for 'Block' entities. */
  Token = 'TOKEN'
}

/** The 'Config page' entity type. */
export type ConfigPages = {
  /** The time that the config page was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The Config Page context. */
  context?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Config page' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The config page ID. */
  id?: Maybe<Scalars['Int']>;
  /** A brief description of your config page. */
  label?: Maybe<Scalars['String']>;
  /** Query reference: The config page type. */
  queryType?: Maybe<EntityQueryResult>;
  /** The config page type. */
  type?: Maybe<FieldConfigPagesType>;
  /** The config page UUID. */
  uuid?: Maybe<Scalars['String']>;
};


/** The 'Config page' entity type. */
export type ConfigPagesEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Config page' entity type. */
export type ConfigPagesEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Config page' entity type. */
export type ConfigPagesEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Config page' entity type. */
export type ConfigPagesEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Config page' entity type. */
export type ConfigPagesEntityRenderedArgs = {
  mode?: InputMaybe<ConfigPagesDisplayModeId>;
};


/** The 'Config page' entity type. */
export type ConfigPagesEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Config page' entity type. */
export type ConfigPagesQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'Config page' entities. */
export enum ConfigPagesDisplayModeId {
  /** The 'Full' display mode for 'Config page' entities. */
  Full = 'FULL',
  /** The 'Token' display mode for 'Config page' entities. */
  Token = 'TOKEN'
}

/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettings = ConfigPages & Entity & {
  __typename?: 'ConfigPagesSettings';
  /** The time that the config page was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The Config Page context. */
  context?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Config page' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  fieldDefaultHeader?: Maybe<FieldConfigPagesSettingsFieldDefaultHeader>;
  fieldPrimaryColor?: Maybe<FieldConfigPagesSettingsFieldPrimaryColor>;
  /** The config page ID. */
  id?: Maybe<Scalars['Int']>;
  /** A brief description of your config page. */
  label?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryFieldDefaultHeader?: Maybe<EntityQueryResult>;
  /** Query reference: The config page type. */
  queryType?: Maybe<EntityQueryResult>;
  /** The config page type. */
  type?: Maybe<FieldConfigPagesType>;
  /** The config page UUID. */
  uuid?: Maybe<Scalars['String']>;
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsEntityRenderedArgs = {
  mode?: InputMaybe<ConfigPagesDisplayModeId>;
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsQueryFieldDefaultHeaderArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Settings' bundle of the 'Config page' entity type. */
export type ConfigPagesSettingsQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

export type ConstraintViolation = {
  __typename?: 'ConstraintViolation';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

/** The 'Crop' entity type. */
export type Crop = {
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Crop' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The crop type. */
  queryType?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
};


/** The 'Crop' entity type. */
export type CropEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Crop' entity type. */
export type CropEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Crop' entity type. */
export type CropEntityRenderedArgs = {
  mode?: InputMaybe<CropDisplayModeId>;
};


/** The 'Crop' entity type. */
export type CropEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Crop' entity type. */
export type CropEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Crop' entity type. */
export type CropQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Crop' entity type. */
export type CropQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'Crop' entities. */
export enum CropDisplayModeId {
  /** The 'Token' display mode for 'Crop' entities. */
  Token = 'TOKEN'
}

/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPoint = Crop & Entity & EntityRevisionable & {
  __typename?: 'CropFocalPoint';
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Crop' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The crop type. */
  queryType?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityRenderedArgs = {
  mode?: InputMaybe<CropDisplayModeId>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

export type DefaultInternalUrl = InternalUrl & Url & {
  __typename?: 'DefaultInternalUrl';
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  currentUserContext?: Maybe<User>;
  languageContentContext?: Maybe<Language>;
  languageInterfaceContext?: Maybe<Language>;
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  /** Loads metatags for the URL. */
  metatags?: Maybe<Array<Maybe<Metatag>>>;
  /** Loads metatags schema for the URL. */
  metatags_schema?: Maybe<Scalars['String']>;
  nodeContext?: Maybe<Node>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  request?: Maybe<InternalResponse>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
};


export type DefaultInternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


export type DefaultInternalUrlLanguageSwitchLinksArgs = {
  language?: InputMaybe<LanguageId>;
};


export type DefaultInternalUrlTranslateArgs = {
  language: LanguageId;
};

/** Common entity interface containing generic entity properties. */
export type Entity = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityTranslationArgs = {
  language: LanguageId;
};

/** The canonical entity url. */
export type EntityCanonicalUrl = InternalUrl & Url & {
  __typename?: 'EntityCanonicalUrl';
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  currentUserContext?: Maybe<User>;
  /** The entity belonging to the current url. */
  entity?: Maybe<Entity>;
  languageContentContext?: Maybe<Language>;
  languageInterfaceContext?: Maybe<Language>;
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  /** Loads metatags for the URL. */
  metatags?: Maybe<Array<Maybe<Metatag>>>;
  /** Loads metatags schema for the URL. */
  metatags_schema?: Maybe<Scalars['String']>;
  nodeContext?: Maybe<Node>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  request?: Maybe<InternalResponse>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


/** The canonical entity url. */
export type EntityCanonicalUrlLanguageSwitchLinksArgs = {
  language?: InputMaybe<LanguageId>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlTranslateArgs = {
  language: LanguageId;
};

export type EntityCrudOutput = {
  __typename?: 'EntityCrudOutput';
  entity?: Maybe<Entity>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  violations?: Maybe<Array<Maybe<ConstraintViolation>>>;
};

/** Common interface for entities that are describable. */
export type EntityDescribable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityDescription?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityTranslationArgs = {
  language: LanguageId;
};

/** Common interface for entities that have a owner. */
export type EntityOwnable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityQueryExclusive: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityTranslationArgs = {
  language: LanguageId;
};

/** Common interface for entities that are publishable. */
export type EntityPublishable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityTranslationArgs = {
  language: LanguageId;
};

export enum EntityQueryBundleMode {
  /** Loads entities across all bundles. */
  All = 'ALL',
  /** Loads only entities that share the same bundle with the parent entity. */
  Same = 'SAME'
}

export type EntityQueryFilterConditionInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  field: Scalars['String'];
  language?: InputMaybe<LanguageId>;
  operator?: InputMaybe<QueryOperator>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EntityQueryFilterInput = {
  conditions?: InputMaybe<Array<InputMaybe<EntityQueryFilterConditionInput>>>;
  conjunction?: InputMaybe<QueryConjunction>;
  groups?: InputMaybe<Array<InputMaybe<EntityQueryFilterInput>>>;
};

/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResult = {
  __typename?: 'EntityQueryResult';
  count?: Maybe<Scalars['Int']>;
  entities?: Maybe<Array<Maybe<Entity>>>;
};


/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResultEntitiesArgs = {
  language?: InputMaybe<LanguageId>;
};

export enum EntityQueryRevisionMode {
  /** Loads all revisions. */
  All = 'ALL',
  /** Loads the current (default) revisions. */
  Default = 'DEFAULT',
  /** Loads latest revision. */
  Latest = 'LATEST'
}

export type EntityQuerySortInput = {
  direction?: InputMaybe<SortOrder>;
  field: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};

/** Common interface for entities that are revisionable. */
export type EntityRevisionable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityTranslationArgs = {
  language: LanguageId;
};

export type ExternalResponse = {
  __typename?: 'ExternalResponse';
  code?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
};


export type ExternalResponseHeaderArgs = {
  key?: InputMaybe<Scalars['String']>;
};

export type ExternalUrl = Url & {
  __typename?: 'ExternalUrl';
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  request?: Maybe<ExternalResponse>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
};


export type ExternalUrlTranslateArgs = {
  language: LanguageId;
};

export type FieldConfigPagesSettingsFieldDefaultHeader = {
  __typename?: 'FieldConfigPagesSettingsFieldDefaultHeader';
  /** The referenced entity */
  entity?: Maybe<Media>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldConfigPagesSettingsFieldPrimaryColor = {
  __typename?: 'FieldConfigPagesSettingsFieldPrimaryColor';
  color?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** The config page type. */
export type FieldConfigPagesType = {
  __typename?: 'FieldConfigPagesType';
  /** The referenced entity */
  entity?: Maybe<Entity>;
  targetId?: Maybe<Scalars['String']>;
};

/** The node language code. */
export type FieldCropLangcode = {
  __typename?: 'FieldCropLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The user ID of the author of the current revision. */
export type FieldCropRevisionUid = {
  __typename?: 'FieldCropRevisionUid';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

/** The crop type. */
export type FieldCropType = {
  __typename?: 'FieldCropType';
  /** The referenced entity */
  entity?: Maybe<Entity>;
  targetId?: Maybe<Scalars['String']>;
};

/** The file language code. */
export type FieldFileLangcode = {
  __typename?: 'FieldFileLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The user ID of the file. */
export type FieldFileUid = {
  __typename?: 'FieldFileUid';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

/** The URI to access the file (either local or remote). */
export type FieldFileUri = {
  __typename?: 'FieldFileUri';
  url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldMediaBundle = {
  __typename?: 'FieldMediaBundle';
  /** The referenced entity */
  entity?: Maybe<Entity>;
  targetId?: Maybe<Scalars['String']>;
};

export type FieldMediaImageFieldMediaImage = {
  __typename?: 'FieldMediaImageFieldMediaImage';
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  derivative?: Maybe<ImageResource>;
  /** The referenced entity */
  entity?: Maybe<File>;
  height?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type FieldMediaImageFieldMediaImageDerivativeArgs = {
  style: ImageStyleId;
};

export type FieldMediaLangcode = {
  __typename?: 'FieldMediaLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

export type FieldMediaPath = {
  __typename?: 'FieldMediaPath';
  alias?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
};

/** The user ID of the author of the current revision. */
export type FieldMediaRevisionUser = {
  __typename?: 'FieldMediaRevisionUser';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

/** The thumbnail of the media item. */
export type FieldMediaThumbnail = {
  __typename?: 'FieldMediaThumbnail';
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  derivative?: Maybe<ImageResource>;
  /** The referenced entity */
  entity?: Maybe<File>;
  height?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** The thumbnail of the media item. */
export type FieldMediaThumbnailDerivativeArgs = {
  style: ImageStyleId;
};

/** The user ID of the author. */
export type FieldMediaUid = {
  __typename?: 'FieldMediaUid';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

/** The menu link language code. */
export type FieldMenuLinkContentLangcode = {
  __typename?: 'FieldMenuLinkContentLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The location this menu link points to. */
export type FieldMenuLinkContentLink = {
  __typename?: 'FieldMenuLinkContentLink';
  attribute?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


/** The location this menu link points to. */
export type FieldMenuLinkContentLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The user ID of the author of the current revision. */
export type FieldMenuLinkContentRevisionUser = {
  __typename?: 'FieldMenuLinkContentRevisionUser';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldNodeLangcode = {
  __typename?: 'FieldNodeLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** Computed menu link for the node (only available during node saving). */
export type FieldNodeMenuLink = {
  __typename?: 'FieldNodeMenuLink';
  /** The referenced entity */
  entity?: Maybe<MenuLinkContent>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldNodePageBody = {
  __typename?: 'FieldNodePageBody';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldNodePageFieldContent = {
  __typename?: 'FieldNodePageFieldContent';
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetId?: Maybe<Scalars['Int']>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodePageFieldEdit = {
  __typename?: 'FieldNodePageFieldEdit';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldNodePageFieldHeader = {
  __typename?: 'FieldNodePageFieldHeader';
  /** The referenced entity */
  entity?: Maybe<Media>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldNodePath = {
  __typename?: 'FieldNodePath';
  alias?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
};

/** The user ID of the author of the current revision. */
export type FieldNodeRevisionUid = {
  __typename?: 'FieldNodeRevisionUid';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldNodeType = {
  __typename?: 'FieldNodeType';
  /** The referenced entity */
  entity?: Maybe<Entity>;
  targetId?: Maybe<Scalars['String']>;
};

/** The username of the content author. */
export type FieldNodeUid = {
  __typename?: 'FieldNodeUid';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphGalleryFieldImages = {
  __typename?: 'FieldParagraphGalleryFieldImages';
  /** The referenced entity */
  entity?: Maybe<Media>;
  targetId?: Maybe<Scalars['Int']>;
};

/** The paragraphs entity language code. */
export type FieldParagraphLangcode = {
  __typename?: 'FieldParagraphLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

export type FieldParagraphTitleTextFieldSubtitle = {
  __typename?: 'FieldParagraphTitleTextFieldSubtitle';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldParagraphType = {
  __typename?: 'FieldParagraphType';
  /** The referenced entity */
  entity?: Maybe<Entity>;
  targetId?: Maybe<Scalars['String']>;
};

export type FieldPathAliasLangcode = {
  __typename?: 'FieldPathAliasLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The language code of the shortcut. */
export type FieldShortcutLangcode = {
  __typename?: 'FieldShortcutLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The location this shortcut points to. */
export type FieldShortcutLink = {
  __typename?: 'FieldShortcutLink';
  attribute?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


/** The location this shortcut points to. */
export type FieldShortcutLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The bundle of the shortcut. */
export type FieldShortcutShortcutSet = {
  __typename?: 'FieldShortcutShortcutSet';
  /** The referenced entity */
  entity?: Maybe<Entity>;
  targetId?: Maybe<Scalars['String']>;
};

/** The user language code. */
export type FieldUserLangcode = {
  __typename?: 'FieldUserLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The password of this user (hashed). */
export type FieldUserPass = {
  __typename?: 'FieldUserPass';
  existing?: Maybe<Scalars['String']>;
  preHashed?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldUserPath = {
  __typename?: 'FieldUserPath';
  alias?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
};

/** The user's preferred language code for viewing administration pages. */
export type FieldUserPreferredAdminLangcode = {
  __typename?: 'FieldUserPreferredAdminLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The user's preferred language code for receiving emails and viewing the site. */
export type FieldUserPreferredLangcode = {
  __typename?: 'FieldUserPreferredLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

/** The roles the user has. */
export type FieldUserRoles = {
  __typename?: 'FieldUserRoles';
  /** The referenced entity */
  entity?: Maybe<Entity>;
  targetId?: Maybe<Scalars['String']>;
};

/** The 'File' entity type. */
export type File = Entity & EntityOwnable & {
  __typename?: 'File';
  /** The timestamp that the file was last changed. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The timestamp that the file was created. */
  created?: Maybe<Scalars['Timestamp']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'File' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The file ID. */
  fid?: Maybe<Scalars['Int']>;
  /** The file's MIME type. */
  filemime?: Maybe<Scalars['String']>;
  /** Name of the file with no path components. */
  filename?: Maybe<Scalars['String']>;
  /** The size of the file in bytes. */
  filesize?: Maybe<Scalars['Int']>;
  /** The file language code. */
  langcode?: Maybe<FieldFileLangcode>;
  /** Query reference: The user ID of the file. */
  queryUid?: Maybe<EntityQueryResult>;
  /** The status of the file, temporary (FALSE) and permanent (TRUE). */
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the file. */
  uid?: Maybe<FieldFileUid>;
  /** The URI to access the file (either local or remote). */
  uri?: Maybe<FieldFileUri>;
  url?: Maybe<Scalars['String']>;
  /** The file UUID. */
  uuid?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'File' entity type. */
export type FileEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'File' entity type. */
export type FileEntityRenderedArgs = {
  mode?: InputMaybe<FileDisplayModeId>;
};


/** The 'File' entity type. */
export type FileEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'File' entity type. */
export type FileQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'File' entities. */
export enum FileDisplayModeId {
  /** The 'Token' display mode for 'File' entities. */
  Token = 'TOKEN'
}

export type ImageResource = {
  __typename?: 'ImageResource';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export enum ImageStyleId {
  /** Large (480×480) */
  Large = 'LARGE',
  /** Media Library thumbnail (220×220) */
  Medialibrary = 'MEDIALIBRARY',
  /** Medium (220×220) */
  Medium = 'MEDIUM',
  /** Thumbnail (100×100) */
  Thumbnail = 'THUMBNAIL',
  /** Wide (1090) */
  Wide = 'WIDE'
}

export type InternalResponse = {
  __typename?: 'InternalResponse';
  code?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
};


export type InternalResponseHeaderArgs = {
  key?: InputMaybe<Scalars['String']>;
};

/** Common interface for internal urls. */
export type InternalUrl = {
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  currentUserContext?: Maybe<User>;
  languageContentContext?: Maybe<Language>;
  languageInterfaceContext?: Maybe<Language>;
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  /** Loads metatags for the URL. */
  metatags?: Maybe<Array<Maybe<Metatag>>>;
  /** Loads metatags schema for the URL. */
  metatags_schema?: Maybe<Scalars['String']>;
  nodeContext?: Maybe<Node>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  request?: Maybe<InternalResponse>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
};


/** Common interface for internal urls. */
export type InternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


/** Common interface for internal urls. */
export type InternalUrlLanguageSwitchLinksArgs = {
  language?: InputMaybe<LanguageId>;
};


/** Common interface for internal urls. */
export type InternalUrlTranslateArgs = {
  language: LanguageId;
};

export type Language = {
  __typename?: 'Language';
  /** The language id prepared as a language enum value. */
  argument?: Maybe<Scalars['String']>;
  /** The language direction (rtl or ltr). */
  direction?: Maybe<Scalars['String']>;
  /** The language id. */
  id?: Maybe<Scalars['String']>;
  /** Boolean indicating if this is the configured default language. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Boolean indicating if this language is locked. */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** The human-readable name of the language. */
  name?: Maybe<Scalars['String']>;
  /** The weight of the language. */
  weight?: Maybe<Scalars['Int']>;
};

export enum LanguageId {
  /** English */
  En = 'EN'
}

export type LanguageSwitchLink = {
  __typename?: 'LanguageSwitchLink';
  active?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Language>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<InternalUrl>;
};

export type Link = {
  __typename?: 'Link';
  /** The label of a link. */
  text?: Maybe<Scalars['String']>;
  /** The url of a link. */
  url?: Maybe<Url>;
};

/** The 'Media' entity type. */
export type Media = {
  bundle?: Maybe<FieldMediaBundle>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  langcode?: Maybe<FieldMediaLangcode>;
  mid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference:  */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldDefaultHeaderConfigPages: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldHeaderNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImagesParagraph: EntityQueryResult;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  status?: Maybe<Scalars['Boolean']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
};


/** The 'Media' entity type. */
export type MediaEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Media' entity type. */
export type MediaEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Media' entity type. */
export type MediaEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Media' entity type. */
export type MediaEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Media' entity type. */
export type MediaEntityRenderedArgs = {
  mode?: InputMaybe<MediaDisplayModeId>;
};


/** The 'Media' entity type. */
export type MediaEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Media' entity type. */
export type MediaEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Media' entity type. */
export type MediaQueryBundleArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Media' entity type. */
export type MediaQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Media' entity type. */
export type MediaQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldDefaultHeaderConfigPagesArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldHeaderNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldImagesParagraphArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'Media' entities. */
export enum MediaDisplayModeId {
  /** The 'Full content' display mode for 'Media' entities. */
  Full = 'FULL',
  /** The 'Media library' display mode for 'Media' entities. */
  Medialibrary = 'MEDIALIBRARY',
  /** The 'Token' display mode for 'Media' entities. */
  Token = 'TOKEN'
}

/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImage = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Media & {
  __typename?: 'MediaImage';
  bundle?: Maybe<FieldMediaBundle>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  fieldMediaImage?: Maybe<FieldMediaImageFieldMediaImage>;
  langcode?: Maybe<FieldMediaLangcode>;
  mid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference:  */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldDefaultHeaderConfigPages: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldHeaderNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImagesParagraph: EntityQueryResult;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  status?: Maybe<Scalars['Boolean']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityRenderedArgs = {
  mode?: InputMaybe<MediaDisplayModeId>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryBundleArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldDefaultHeaderConfigPagesArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldHeaderNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldImagesParagraphArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

export type Menu = {
  __typename?: 'Menu';
  /** The menu's description. */
  description?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<MenuLink>>>;
  /** The menu's name. */
  name?: Maybe<Scalars['String']>;
};

export type MenuLink = {
  __typename?: 'MenuLink';
  attribute?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expanded?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<MenuLink>>>;
  url?: Maybe<Url>;
};


export type MenuLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The 'Custom menu link' entity type. */
export type MenuLinkContent = {
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityRenderedArgs = {
  mode?: InputMaybe<MenuLinkContentDisplayModeId>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'Custom menu link' entities. */
export enum MenuLinkContentDisplayModeId {
  /** The 'Token' display mode for 'Custom menu link' entities. */
  Token = 'TOKEN'
}

/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContent = Entity & EntityPublishable & EntityRevisionable & MenuLinkContent & {
  __typename?: 'MenuLinkContentMenuLinkContent';
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityRenderedArgs = {
  mode?: InputMaybe<MenuLinkContentDisplayModeId>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

export type MetaHttpEquiv = Metatag & {
  __typename?: 'MetaHttpEquiv';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['MapArray']>;
};

export type MetaItemProp = Metatag & {
  __typename?: 'MetaItemProp';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['MapArray']>;
};

export type MetaLink = Metatag & {
  __typename?: 'MetaLink';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['MapArray']>;
};

export type MetaLinkHreflang = Metatag & {
  __typename?: 'MetaLinkHreflang';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['MapArray']>;
};

export type MetaProperty = Metatag & {
  __typename?: 'MetaProperty';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['MapArray']>;
};

export type MetaValue = Metatag & {
  __typename?: 'MetaValue';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['MapArray']>;
};

/** Metatag interface containing metatag properties. */
export type Metatag = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['MapArray']>;
};

/** The 'Content' entity type. */
export type Node = {
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  langcode?: Maybe<FieldNodeLangcode>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  nid?: Maybe<Scalars['Int']>;
  path?: Maybe<FieldNodePath>;
  promote?: Maybe<Scalars['Boolean']>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  status?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<FieldNodeType>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
};


/** The 'Content' entity type. */
export type NodeEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Content' entity type. */
export type NodeEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Content' entity type. */
export type NodeEntityRenderedArgs = {
  mode?: InputMaybe<NodeDisplayModeId>;
};


/** The 'Content' entity type. */
export type NodeEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Content' entity type. */
export type NodeEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Content' entity type. */
export type NodeQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Content' entity type. */
export type NodeQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Content' entity type. */
export type NodeQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'Content' entities. */
export enum NodeDisplayModeId {
  /** The 'Full content' display mode for 'Content' entities. */
  Full = 'FULL',
  /** The 'RSS' display mode for 'Content' entities. */
  Rss = 'RSS',
  /** The 'Search index' display mode for 'Content' entities. */
  Searchindex = 'SEARCHINDEX',
  /** The 'Search result highlighting input' display mode for 'Content' entities. */
  Searchresult = 'SEARCHRESULT',
  /** The 'Teaser' display mode for 'Content' entities. */
  Teaser = 'TEASER',
  /** The 'Token' display mode for 'Content' entities. */
  Token = 'TOKEN'
}

/** The 'Page' bundle of the 'Content' entity type. */
export type NodePage = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Node & {
  __typename?: 'NodePage';
  body?: Maybe<FieldNodePageBody>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  fieldContent?: Maybe<Array<Maybe<FieldNodePageFieldContent>>>;
  fieldEdit?: Maybe<FieldNodePageFieldEdit>;
  fieldHeader?: Maybe<FieldNodePageFieldHeader>;
  fieldMetaTags?: Maybe<Scalars['metatag']>;
  langcode?: Maybe<FieldNodeLangcode>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  nid?: Maybe<Scalars['Int']>;
  path?: Maybe<FieldNodePath>;
  promote?: Maybe<Scalars['Boolean']>;
  /** Query reference:  */
  queryFieldHeader?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  status?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<FieldNodeType>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageEntityRenderedArgs = {
  mode?: InputMaybe<NodeDisplayModeId>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageQueryFieldHeaderArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Page' bundle of the 'Content' entity type. */
export type NodePageQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The 'Paragraph' entity type. */
export type Paragraph = {
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  type?: Maybe<FieldParagraphType>;
  uuid?: Maybe<Scalars['String']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimple = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphContainerSimple';
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  fieldTest?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  type?: Maybe<FieldParagraphType>;
  uuid?: Maybe<Scalars['String']>;
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Container (simple)' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerSimpleQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'Paragraph' entities. */
export enum ParagraphDisplayModeId {
  /** The 'Preview' display mode for 'Paragraph' entities. */
  Preview = 'PREVIEW'
}

/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGallery = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphGallery';
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  fieldImages?: Maybe<Array<Maybe<FieldParagraphGalleryFieldImages>>>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryFieldImages?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  type?: Maybe<FieldParagraphType>;
  uuid?: Maybe<Scalars['String']>;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryQueryFieldImagesArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleText = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphTitleText';
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityOwner?: Maybe<User>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  fieldSubtitle?: Maybe<FieldParagraphTitleTextFieldSubtitle>;
  fieldTest?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  type?: Maybe<FieldParagraphType>;
  uuid?: Maybe<Scalars['String']>;
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Title + Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleTextQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The 'URL alias' entity type. */
export type PathAlias = Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'PathAlias';
  /** An alias used with this path. */
  alias?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'URL alias' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldPathAliasLangcode>;
  /** The path that this alias belongs to. */
  path?: Maybe<Scalars['String']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  revisionId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  uuid?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'URL alias' entity type. */
export type PathAliasEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityRenderedArgs = {
  mode?: InputMaybe<PathAliasDisplayModeId>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityTranslationArgs = {
  language: LanguageId;
};

/** The available display modes for 'URL alias' entities. */
export enum PathAliasDisplayModeId {
  /** The 'Token' display mode for 'URL alias' entities. */
  Token = 'TOKEN'
}

export type Query = {
  __typename?: 'Query';
  /** Loads the list of available languages. */
  availableLanguages?: Maybe<Array<Maybe<Language>>>;
  /** Loads 'Config page' entities by their id. */
  configPagesById?: Maybe<ConfigPages>;
  /** Loads 'Config page' entities. */
  configPagesQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Crop' entities by their id. */
  cropById?: Maybe<Crop>;
  /** Loads 'Crop' entities. */
  cropQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Crop' entity revision by their revision id. */
  cropRevisionById?: Maybe<Crop>;
  currentUserContext?: Maybe<User>;
  /** Loads 'File' entities by their id. */
  fileById?: Maybe<File>;
  /** Loads 'File' entities. */
  fileQuery?: Maybe<EntityQueryResult>;
  languageContentContext?: Maybe<Language>;
  languageInterfaceContext?: Maybe<Language>;
  /** Loads 'Media' entities by their id. */
  mediaById?: Maybe<Media>;
  /** Loads 'Media' entities. */
  mediaQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Media' entity revision by their revision id. */
  mediaRevisionById?: Maybe<Media>;
  /** Loads a menu by its machine-readable name. */
  menuByName?: Maybe<Menu>;
  /** Loads 'Custom menu link' entities by their id. */
  menuLinkContentById?: Maybe<MenuLinkContent>;
  /** Loads 'Custom menu link' entities. */
  menuLinkContentQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Custom menu link' entity revision by their revision id. */
  menuLinkContentRevisionById?: Maybe<MenuLinkContent>;
  /** Loads 'Content' entities by their id. */
  nodeById?: Maybe<Node>;
  nodeContext?: Maybe<Node>;
  /** Loads 'Content' entities. */
  nodeQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Content' entity revision by their revision id. */
  nodeRevisionById?: Maybe<Node>;
  /** Loads 'Paragraph' entities by their id. */
  paragraphById?: Maybe<Paragraph>;
  /** Loads 'Paragraph' entities. */
  paragraphQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Paragraph' entity revision by their revision id. */
  paragraphRevisionById?: Maybe<Paragraph>;
  /** Loads 'URL alias' entities by their id. */
  pathAliasById?: Maybe<PathAlias>;
  /** Loads 'URL alias' entities. */
  pathAliasQuery?: Maybe<EntityQueryResult>;
  /** Loads 'URL alias' entity revision by their revision id. */
  pathAliasRevisionById?: Maybe<PathAlias>;
  /** Loads a route by its path. */
  route?: Maybe<Url>;
  /** Loads 'Shortcut link' entities by their id. */
  shortcutById?: Maybe<Shortcut>;
  /** Loads 'Shortcut link' entities. */
  shortcutQuery?: Maybe<EntityQueryResult>;
  /** Loads 'User' entities by their id. */
  userById?: Maybe<User>;
  /** Loads 'User' entities. */
  userQuery?: Maybe<EntityQueryResult>;
};


export type QueryConfigPagesByIdArgs = {
  id: Scalars['String'];
};


export type QueryConfigPagesQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryCropByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryCropQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryCropRevisionByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryFileByIdArgs = {
  id: Scalars['String'];
};


export type QueryFileQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryMediaByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryMediaQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryMediaRevisionByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryMenuByNameArgs = {
  language?: InputMaybe<LanguageId>;
  name: Scalars['String'];
};


export type QueryMenuLinkContentByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryMenuLinkContentQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryMenuLinkContentRevisionByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryNodeByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryNodeQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryNodeRevisionByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryParagraphByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryParagraphQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryParagraphRevisionByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryPathAliasByIdArgs = {
  id: Scalars['String'];
};


export type QueryPathAliasQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryPathAliasRevisionByIdArgs = {
  id: Scalars['String'];
};


export type QueryRouteArgs = {
  path: Scalars['String'];
};


export type QueryShortcutByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryShortcutQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
  language?: InputMaybe<LanguageId>;
};


export type QueryUserQueryArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

export enum QueryConjunction {
  And = 'AND',
  Or = 'OR'
}

export enum QueryOperator {
  Between = 'BETWEEN',
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  Like = 'LIKE',
  NotBetween = 'NOT_BETWEEN',
  NotEqual = 'NOT_EQUAL',
  NotIn = 'NOT_IN',
  NotLike = 'NOT_LIKE',
  SmallerThan = 'SMALLER_THAN',
  SmallerThanOrEqual = 'SMALLER_THAN_OR_EQUAL'
}

/** The 'Shortcut link' entity type. */
export type Shortcut = {
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Shortcut link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The ID of the shortcut. */
  id?: Maybe<Scalars['Int']>;
  /** The language code of the shortcut. */
  langcode?: Maybe<FieldShortcutLangcode>;
  /** The location this shortcut points to. */
  link?: Maybe<FieldShortcutLink>;
  /** Query reference: The bundle of the shortcut. */
  queryShortcutSet?: Maybe<EntityQueryResult>;
  /** The bundle of the shortcut. */
  shortcutSet?: Maybe<FieldShortcutShortcutSet>;
  /** The name of the shortcut. */
  title?: Maybe<Scalars['String']>;
  /** The UUID of the shortcut. */
  uuid?: Maybe<Scalars['String']>;
  /** Weight among shortcuts in the same shortcut set. */
  weight?: Maybe<Scalars['Int']>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityRenderedArgs = {
  mode?: InputMaybe<ShortcutDisplayModeId>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Shortcut link' entity type. */
export type ShortcutQueryShortcutSetArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefault = Entity & Shortcut & {
  __typename?: 'ShortcutDefault';
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'Shortcut link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The ID of the shortcut. */
  id?: Maybe<Scalars['Int']>;
  /** The language code of the shortcut. */
  langcode?: Maybe<FieldShortcutLangcode>;
  /** The location this shortcut points to. */
  link?: Maybe<FieldShortcutLink>;
  /** Query reference: The bundle of the shortcut. */
  queryShortcutSet?: Maybe<EntityQueryResult>;
  /** The bundle of the shortcut. */
  shortcutSet?: Maybe<FieldShortcutShortcutSet>;
  /** The name of the shortcut. */
  title?: Maybe<Scalars['String']>;
  /** The UUID of the shortcut. */
  uuid?: Maybe<Scalars['String']>;
  /** Weight among shortcuts in the same shortcut set. */
  weight?: Maybe<Scalars['Int']>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityRenderedArgs = {
  mode?: InputMaybe<ShortcutDisplayModeId>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultQueryShortcutSetArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'Shortcut link' entities. */
export enum ShortcutDisplayModeId {
  /** The 'Token' display mode for 'Shortcut link' entities. */
  Token = 'TOKEN'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntity = Entity & {
  __typename?: 'UnexposedEntity';
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityTranslationArgs = {
  language: LanguageId;
};

/** Common interface for internal and external urls. */
export type Url = {
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
};


/** Common interface for internal and external urls. */
export type UrlTranslateArgs = {
  language: LanguageId;
};

/** The 'User' entity type. */
export type User = Entity & {
  __typename?: 'User';
  /** The time that the user last accessed the site. */
  access?: Maybe<Scalars['Timestamp']>;
  /** The time that the user was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time that the user was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  /** Loads metatags for the entity. */
  entityMetatags?: Maybe<Array<Maybe<Metatag>>>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'User' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /**
   * Loads schema.org defined metatags for the
   *  *   entity
   */
  entitySchemaMetatags?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The email address used for initial account creation. */
  init?: Maybe<Scalars['String']>;
  /** The user language code. */
  langcode?: Maybe<FieldUserLangcode>;
  /** The time that the user last logged in. */
  login?: Maybe<Scalars['Timestamp']>;
  /** The email of this user. */
  mail?: Maybe<Scalars['String']>;
  /** The name of this user. */
  name?: Maybe<Scalars['String']>;
  /** The password of this user (hashed). */
  pass?: Maybe<FieldUserPass>;
  path?: Maybe<FieldUserPath>;
  /** The user's preferred language code for viewing administration pages. */
  preferredAdminLangcode?: Maybe<FieldUserPreferredAdminLangcode>;
  /** The user's preferred language code for receiving emails and viewing the site. */
  preferredLangcode?: Maybe<FieldUserPreferredLangcode>;
  /** Query reference: The roles the user has. */
  queryRoles?: Maybe<EntityQueryResult>;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidCrop: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidNode: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserMedia: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserMenuLinkContent: EntityQueryResult;
  /** Reverse reference: The user ID of the file. */
  reverseUidFile: EntityQueryResult;
  /** Reverse reference: The user ID of the author. */
  reverseUidMedia: EntityQueryResult;
  /** Reverse reference: The username of the content author. */
  reverseUidNode: EntityQueryResult;
  /** The roles the user has. */
  roles?: Maybe<Array<Maybe<FieldUserRoles>>>;
  /** Whether the user is active or blocked. */
  status?: Maybe<Scalars['Boolean']>;
  /** The timezone of this user. */
  timezone?: Maybe<Scalars['String']>;
  /** The user ID. */
  uid?: Maybe<Scalars['Int']>;
  /** The user UUID. */
  uuid?: Maybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'User' entity type. */
export type UserEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserEntityRenderedArgs = {
  mode?: InputMaybe<UserDisplayModeId>;
};


/** The 'User' entity type. */
export type UserEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'User' entity type. */
export type UserQueryRolesArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidCropArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserMediaArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserMenuLinkContentArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserReverseUidFileArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserReverseUidMediaArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The 'User' entity type. */
export type UserReverseUidNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for 'User' entities. */
export enum UserDisplayModeId {
  /** The 'Compact' display mode for 'User' entities. */
  Compact = 'COMPACT',
  /** The 'User account' display mode for 'User' entities. */
  Full = 'FULL',
  /** The 'Token' display mode for 'User' entities. */
  Token = 'TOKEN'
}

export type ConfigPageQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type ConfigPageQuery = { __typename?: 'Query', configPagesQuery?: { __typename?: 'EntityQueryResult', entities?: Array<{ __typename?: 'ConfigPagesSettings', entityLabel?: string | null, fieldPrimaryColor?: { __typename?: 'FieldConfigPagesSettingsFieldPrimaryColor', color?: string | null, opacity?: number | null } | null, header?: { __typename?: 'FieldConfigPagesSettingsFieldDefaultHeader', entity?: { __typename?: 'MediaImage', image?: { __typename?: 'FieldMediaImageFieldMediaImage', url?: string | null, height?: number | null, width?: number | null, alt?: string | null } | null } | null } | null } | { __typename?: 'CropFocalPoint', entityLabel?: string | null } | { __typename?: 'File', entityLabel?: string | null } | { __typename?: 'MediaImage', entityLabel?: string | null } | { __typename?: 'MenuLinkContentMenuLinkContent', entityLabel?: string | null } | { __typename?: 'NodePage', entityLabel?: string | null } | { __typename?: 'ParagraphContainerSimple', entityLabel?: string | null } | { __typename?: 'ParagraphGallery', entityLabel?: string | null } | { __typename?: 'ParagraphTitleText', entityLabel?: string | null } | { __typename?: 'PathAlias', entityLabel?: string | null } | { __typename?: 'ShortcutDefault', entityLabel?: string | null } | { __typename?: 'UnexposedEntity', entityLabel?: string | null } | { __typename?: 'User', entityLabel?: string | null } | null> | null } | null };

export type ConfigPageSettingsFieldsFragment = { __typename?: 'ConfigPagesSettings', fieldPrimaryColor?: { __typename?: 'FieldConfigPagesSettingsFieldPrimaryColor', color?: string | null, opacity?: number | null } | null, header?: { __typename?: 'FieldConfigPagesSettingsFieldDefaultHeader', entity?: { __typename?: 'MediaImage', image?: { __typename?: 'FieldMediaImageFieldMediaImage', url?: string | null, height?: number | null, width?: number | null, alt?: string | null } | null } | null } | null };

export type EntityByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type EntityByPathQuery = { __typename?: 'Query', route?: { __typename?: 'DefaultInternalUrl' } | { __typename?: 'EntityCanonicalUrl', entity?: { __typename?: 'ConfigPagesSettings', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'CropFocalPoint', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'File', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'MediaImage', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'MenuLinkContentMenuLinkContent', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'NodePage', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null, fieldContent?: Array<{ __typename?: 'FieldNodePageFieldContent', entity?: { __typename: 'ParagraphContainerSimple', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphGallery', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphTitleText', behaviorSettings?: string | null, uuid?: string | null, id?: number | null, fieldTest?: string | null, fieldSubtitle?: { __typename?: 'FieldParagraphTitleTextFieldSubtitle', format?: string | null, processed?: string | null } | null } | null } | null> | null, fieldHeader?: { __typename?: 'FieldNodePageFieldHeader', entity?: { __typename?: 'MediaImage', fieldMediaImage?: { __typename?: 'FieldMediaImageFieldMediaImage', derivative?: { __typename?: 'ImageResource', url?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | { __typename?: 'ParagraphContainerSimple', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'ParagraphGallery', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'ParagraphTitleText', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'PathAlias', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'ShortcutDefault', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'UnexposedEntity', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename?: 'User', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | null } | { __typename?: 'ExternalUrl' } | null };

export type MenuQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type MenuQuery = { __typename?: 'Query', menuByName?: { __typename?: 'Menu', links?: Array<{ __typename?: 'MenuLink', label?: string | null, description?: string | null, links?: Array<{ __typename?: 'MenuLink', label?: string | null, description?: string | null, links?: Array<{ __typename?: 'MenuLink', label?: string | null, description?: string | null, url?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | null> | null, url?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | null> | null, url?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | null> | null } | null };

export type MenuLinksFragment = { __typename?: 'MenuLink', label?: string | null, description?: string | null, url?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null };

export type NodePageFieldsFragment = { __typename?: 'NodePage', fieldContent?: Array<{ __typename?: 'FieldNodePageFieldContent', entity?: { __typename: 'ParagraphContainerSimple', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphGallery', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphTitleText', behaviorSettings?: string | null, uuid?: string | null, id?: number | null, fieldTest?: string | null, fieldSubtitle?: { __typename?: 'FieldParagraphTitleTextFieldSubtitle', format?: string | null, processed?: string | null } | null } | null } | null> | null, fieldHeader?: { __typename?: 'FieldNodePageFieldHeader', entity?: { __typename?: 'MediaImage', fieldMediaImage?: { __typename?: 'FieldMediaImageFieldMediaImage', derivative?: { __typename?: 'ImageResource', url?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null };

export type ParagraphTitleTextFragment = { __typename?: 'ParagraphTitleText', fieldTest?: string | null, fieldSubtitle?: { __typename?: 'FieldParagraphTitleTextFieldSubtitle', format?: string | null, processed?: string | null } | null };

export type PathsQueryVariables = Exact<{ [key: string]: never; }>;


export type PathsQuery = { __typename?: 'Query', nodeQuery?: { __typename?: 'EntityQueryResult', entities?: Array<{ __typename?: 'ConfigPagesSettings', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'CropFocalPoint', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'File', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'MediaImage', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'MenuLinkContentMenuLinkContent', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'NodePage', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphContainerSimple', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphGallery', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphTitleText', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'PathAlias', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ShortcutDefault', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'UnexposedEntity', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'User', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | null> | null } | null };

export const ConfigPageSettingsFieldsFragmentDoc = gql`
    fragment ConfigPageSettingsFields on ConfigPagesSettings {
  fieldPrimaryColor {
    color
    opacity
  }
  header: fieldDefaultHeader {
    entity {
      ... on MediaImage {
        image: fieldMediaImage {
          url
          height
          width
          alt
        }
      }
    }
  }
}
    `;
export const MenuLinksFragmentDoc = gql`
    fragment MenuLinks on MenuLink {
  label
  description
  url {
    path
    routed
  }
}
    `;
export const ParagraphTitleTextFragmentDoc = gql`
    fragment ParagraphTitleText on ParagraphTitleText {
  fieldTest
  fieldSubtitle {
    format
    processed
  }
}
    `;
export const NodePageFieldsFragmentDoc = gql`
    fragment NodePageFields on NodePage {
  fieldContent {
    entity {
      behaviorSettings
      __typename
      uuid
      id
      ...ParagraphTitleText
    }
  }
  fieldHeader {
    entity {
      ... on MediaImage {
        fieldMediaImage {
          derivative(style: THUMBNAIL) {
            url
            width
            height
          }
        }
      }
    }
  }
}
    ${ParagraphTitleTextFragmentDoc}`;
export const ConfigPageDocument = gql`
    query ConfigPage($type: String!) {
  configPagesQuery(
    filter: {conditions: {operator: EQUAL, field: "type", value: [$type]}}
  ) {
    entities {
      entityLabel
      ...ConfigPageSettingsFields
    }
  }
}
    ${ConfigPageSettingsFieldsFragmentDoc}`;
export const EntityByPathDocument = gql`
    query EntityByPath($path: String!) {
  route(path: $path) {
    ... on EntityCanonicalUrl {
      entity {
        entityMetatags {
          __typename
          key
          value
        }
        ...NodePageFields
      }
    }
  }
}
    ${NodePageFieldsFragmentDoc}`;
export const MenuDocument = gql`
    query Menu($name: String!) {
  menuByName(name: $name) {
    links {
      ...MenuLinks
      links {
        ...MenuLinks
        links {
          ...MenuLinks
        }
      }
    }
  }
}
    ${MenuLinksFragmentDoc}`;
export const PathsDocument = gql`
    query Paths {
  nodeQuery {
    entities {
      entityLabel
      entityType
      entityBundle
      entityUrl {
        path
        routed
      }
    }
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    ConfigPage(variables: ConfigPageQueryVariables, options?: C): Promise<ConfigPageQuery> {
      return requester<ConfigPageQuery, ConfigPageQueryVariables>(ConfigPageDocument, variables, options);
    },
    EntityByPath(variables: EntityByPathQueryVariables, options?: C): Promise<EntityByPathQuery> {
      return requester<EntityByPathQuery, EntityByPathQueryVariables>(EntityByPathDocument, variables, options);
    },
    Menu(variables: MenuQueryVariables, options?: C): Promise<MenuQuery> {
      return requester<MenuQuery, MenuQueryVariables>(MenuDocument, variables, options);
    },
    Paths(variables?: PathsQueryVariables, options?: C): Promise<PathsQuery> {
      return requester<PathsQuery, PathsQueryVariables>(PathsDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;