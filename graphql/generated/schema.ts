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
  Timestamp: any;
  Upload: any;
  metatag: any;
};

/** The available display modes for '@type' entities. */
export enum BlockDisplayModeId {
  /** The 'Jeton (token)' display mode for 'Bloc' entities. */
  Token = 'TOKEN'
}

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryType?: Maybe<EntityQueryResult>;
  /** The config page type. */
  type?: Maybe<FieldConfigPagesType>;
  /** The config page UUID. */
  uuid?: Maybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type ConfigPagesEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type ConfigPagesEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type ConfigPagesEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type ConfigPagesEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type ConfigPagesEntityRenderedArgs = {
  mode?: InputMaybe<ConfigPagesDisplayModeId>;
};


/** The '@type' entity type. */
export type ConfigPagesEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type ConfigPagesQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum ConfigPagesDisplayModeId {
  /** The 'Complet' display mode for 'Config page' entities. */
  Full = 'FULL',
  /** The 'Jeton (token)' display mode for 'Config page' entities. */
  Token = 'TOKEN'
}

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldAddress?: Maybe<Scalars['String']>;
  fieldAlerts?: Maybe<Array<Maybe<FieldConfigPagesSettingsFieldAlerts>>>;
  fieldContactLink?: Maybe<FieldConfigPagesSettingsFieldContactLink>;
  fieldCopyright?: Maybe<Scalars['String']>;
  fieldGoogleMapApi?: Maybe<Scalars['String']>;
  fieldHomepageTitle?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  fieldPhysioContact?: Maybe<Scalars['String']>;
  fieldPhysioFormations?: Maybe<Scalars['String']>;
  fieldPhysioSpecialisations?: Maybe<Scalars['String']>;
  fieldPrimaryColor?: Maybe<FieldConfigPagesSettingsFieldPrimaryColor>;
  fieldSecondaryColor?: Maybe<FieldConfigPagesSettingsFieldSecondaryColor>;
  fieldSoinReadMore?: Maybe<Scalars['String']>;
  fieldSoinsOtherText?: Maybe<FieldConfigPagesSettingsFieldSoinsOtherText>;
  fieldSoinsOtherTitle?: Maybe<Scalars['String']>;
  fieldSoinsPhysiosText?: Maybe<FieldConfigPagesSettingsFieldSoinsPhysiosText>;
  fieldSoinsPhysiosTitle?: Maybe<Scalars['String']>;
  /** The config page ID. */
  id?: Maybe<Scalars['Int']>;
  /** A brief description of your config page. */
  label?: Maybe<Scalars['String']>;
  /** Query reference: @description */
  queryType?: Maybe<EntityQueryResult>;
  /** The config page type. */
  type?: Maybe<FieldConfigPagesType>;
  /** The config page UUID. */
  uuid?: Maybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ConfigPagesSettingsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ConfigPagesSettingsEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ConfigPagesSettingsEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ConfigPagesSettingsEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ConfigPagesSettingsEntityRenderedArgs = {
  mode?: InputMaybe<ConfigPagesDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ConfigPagesSettingsEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
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

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
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


/** The '@type' entity type. */
export type CropEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type CropEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type CropEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type CropEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type CropEntityRenderedArgs = {
  mode?: InputMaybe<CropDisplayModeId>;
};


/** The '@type' entity type. */
export type CropEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type CropEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type CropQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type CropQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum CropDisplayModeId {
  /** The 'Jeton (token)' display mode for 'Recadrer' entities. */
  Token = 'TOKEN'
}

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointEntityRenderedArgs = {
  mode?: InputMaybe<CropDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropFocalPointQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquare = Crop & Entity & EntityRevisionable & {
  __typename?: 'CropSquare';
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareEntityRenderedArgs = {
  mode?: InputMaybe<CropDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type CropSquareQueryTypeArgs = {
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

export type FieldConfigPagesSettingsFieldAlerts = {
  __typename?: 'FieldConfigPagesSettingsFieldAlerts';
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetId?: Maybe<Scalars['Int']>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldConfigPagesSettingsFieldContactLink = {
  __typename?: 'FieldConfigPagesSettingsFieldContactLink';
  attribute?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


export type FieldConfigPagesSettingsFieldContactLinkAttributeArgs = {
  key: Scalars['String'];
};

export type FieldConfigPagesSettingsFieldPrimaryColor = {
  __typename?: 'FieldConfigPagesSettingsFieldPrimaryColor';
  color?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Float']>;
};

export type FieldConfigPagesSettingsFieldSecondaryColor = {
  __typename?: 'FieldConfigPagesSettingsFieldSecondaryColor';
  color?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Float']>;
};

export type FieldConfigPagesSettingsFieldSoinsOtherText = {
  __typename?: 'FieldConfigPagesSettingsFieldSoinsOtherText';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldConfigPagesSettingsFieldSoinsPhysiosText = {
  __typename?: 'FieldConfigPagesSettingsFieldSoinsPhysiosText';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
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

export type FieldMediaIconFieldMediaSvg = {
  __typename?: 'FieldMediaIconFieldMediaSvg';
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  render?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['Int']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
};


export type FieldMediaIconFieldMediaSvgRenderArgs = {
  class?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
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

export type FieldNodePageFieldMetaTags = {
  __typename?: 'FieldNodePageFieldMetaTags';
  abstract?: Maybe<Scalars['String']>;
  articleAuthor?: Maybe<Scalars['String']>;
  articleExpirationTime?: Maybe<Scalars['String']>;
  articleModifiedTime?: Maybe<Scalars['String']>;
  articlePublishedTime?: Maybe<Scalars['String']>;
  articlePublisher?: Maybe<Scalars['String']>;
  articleSection?: Maybe<Scalars['String']>;
  articleTag?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  bookAuthor?: Maybe<Scalars['String']>;
  bookIsbn?: Maybe<Scalars['String']>;
  bookReleaseDate?: Maybe<Scalars['String']>;
  bookTag?: Maybe<Scalars['String']>;
  cacheControl?: Maybe<Scalars['String']>;
  canonicalUrl?: Maybe<Scalars['String']>;
  contentLanguage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
  fbAdmins?: Maybe<Scalars['String']>;
  fbAppId?: Maybe<Scalars['String']>;
  fbPages?: Maybe<Scalars['String']>;
  generator?: Maybe<Scalars['String']>;
  geoPlacename?: Maybe<Scalars['String']>;
  geoPosition?: Maybe<Scalars['String']>;
  geoRegion?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  icbm?: Maybe<Scalars['String']>;
  imageSrc?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  newsKeywords?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
  ogAudio?: Maybe<Scalars['String']>;
  ogAudioSecureUrl?: Maybe<Scalars['String']>;
  ogAudioType?: Maybe<Scalars['String']>;
  ogCountryName?: Maybe<Scalars['String']>;
  ogDescription?: Maybe<Scalars['String']>;
  ogDeterminer?: Maybe<Scalars['String']>;
  ogEmail?: Maybe<Scalars['String']>;
  ogFaxNumber?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Scalars['String']>;
  ogImageAlt?: Maybe<Scalars['String']>;
  ogImageHeight?: Maybe<Scalars['String']>;
  ogImageSecureUrl?: Maybe<Scalars['String']>;
  ogImageType?: Maybe<Scalars['String']>;
  ogImageUrl?: Maybe<Scalars['String']>;
  ogImageWidth?: Maybe<Scalars['String']>;
  ogLatitude?: Maybe<Scalars['String']>;
  ogLocale?: Maybe<Scalars['String']>;
  ogLocaleAlternative?: Maybe<Scalars['String']>;
  ogLocality?: Maybe<Scalars['String']>;
  ogLongitude?: Maybe<Scalars['String']>;
  ogPhoneNumber?: Maybe<Scalars['String']>;
  ogPostalCode?: Maybe<Scalars['String']>;
  ogRegion?: Maybe<Scalars['String']>;
  ogSeeAlso?: Maybe<Scalars['String']>;
  ogSiteName?: Maybe<Scalars['String']>;
  ogStreetAddress?: Maybe<Scalars['String']>;
  ogTitle?: Maybe<Scalars['String']>;
  ogType?: Maybe<Scalars['String']>;
  ogUpdatedTime?: Maybe<Scalars['String']>;
  ogUrl?: Maybe<Scalars['String']>;
  ogVideo?: Maybe<Scalars['String']>;
  ogVideoDuration?: Maybe<Scalars['String']>;
  ogVideoHeight?: Maybe<Scalars['String']>;
  ogVideoSecureUrl?: Maybe<Scalars['String']>;
  ogVideoType?: Maybe<Scalars['String']>;
  ogVideoWidth?: Maybe<Scalars['String']>;
  originalSource?: Maybe<Scalars['String']>;
  pragma?: Maybe<Scalars['String']>;
  prev?: Maybe<Scalars['String']>;
  profileFirstName?: Maybe<Scalars['String']>;
  profileGender?: Maybe<Scalars['String']>;
  profileLastName?: Maybe<Scalars['String']>;
  profileUsername?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['String']>;
  revisitAfter?: Maybe<Scalars['String']>;
  rights?: Maybe<Scalars['String']>;
  robots?: Maybe<Scalars['String']>;
  setCookie?: Maybe<Scalars['String']>;
  shortlink?: Maybe<Scalars['String']>;
  standout?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitterCardsAppIdGoogleplay?: Maybe<Scalars['String']>;
  twitterCardsAppIdIpad?: Maybe<Scalars['String']>;
  twitterCardsAppIdIphone?: Maybe<Scalars['String']>;
  twitterCardsAppNameGoogleplay?: Maybe<Scalars['String']>;
  twitterCardsAppNameIpad?: Maybe<Scalars['String']>;
  twitterCardsAppNameIphone?: Maybe<Scalars['String']>;
  twitterCardsAppStoreCountry?: Maybe<Scalars['String']>;
  twitterCardsAppUrlGoogleplay?: Maybe<Scalars['String']>;
  twitterCardsAppUrlIpad?: Maybe<Scalars['String']>;
  twitterCardsAppUrlIphone?: Maybe<Scalars['String']>;
  twitterCardsCreator?: Maybe<Scalars['String']>;
  twitterCardsCreatorId?: Maybe<Scalars['String']>;
  twitterCardsData1?: Maybe<Scalars['String']>;
  twitterCardsData2?: Maybe<Scalars['String']>;
  twitterCardsDescription?: Maybe<Scalars['String']>;
  twitterCardsDonottrack?: Maybe<Scalars['String']>;
  twitterCardsGalleryImage0?: Maybe<Scalars['String']>;
  twitterCardsGalleryImage1?: Maybe<Scalars['String']>;
  twitterCardsGalleryImage2?: Maybe<Scalars['String']>;
  twitterCardsGalleryImage3?: Maybe<Scalars['String']>;
  twitterCardsImage?: Maybe<Scalars['String']>;
  twitterCardsImageAlt?: Maybe<Scalars['String']>;
  twitterCardsImageHeight?: Maybe<Scalars['String']>;
  twitterCardsImageWidth?: Maybe<Scalars['String']>;
  twitterCardsLabel1?: Maybe<Scalars['String']>;
  twitterCardsLabel2?: Maybe<Scalars['String']>;
  twitterCardsPageUrl?: Maybe<Scalars['String']>;
  twitterCardsPlayer?: Maybe<Scalars['String']>;
  twitterCardsPlayerHeight?: Maybe<Scalars['String']>;
  twitterCardsPlayerStream?: Maybe<Scalars['String']>;
  twitterCardsPlayerStreamContentType?: Maybe<Scalars['String']>;
  twitterCardsPlayerWidth?: Maybe<Scalars['String']>;
  twitterCardsSite?: Maybe<Scalars['String']>;
  twitterCardsSiteId?: Maybe<Scalars['String']>;
  twitterCardsTitle?: Maybe<Scalars['String']>;
  twitterCardsType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['metatag']>;
  videoActor?: Maybe<Scalars['String']>;
  videoActorRole?: Maybe<Scalars['String']>;
  videoDirector?: Maybe<Scalars['String']>;
  videoReleaseDate?: Maybe<Scalars['String']>;
  videoSeries?: Maybe<Scalars['String']>;
  videoTag?: Maybe<Scalars['String']>;
  videoWriter?: Maybe<Scalars['String']>;
};

export type FieldNodePath = {
  __typename?: 'FieldNodePath';
  alias?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
};

export type FieldNodePhysioBody = {
  __typename?: 'FieldNodePhysioBody';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldNodePhysioFieldAlert = {
  __typename?: 'FieldNodePhysioFieldAlert';
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetId?: Maybe<Scalars['Int']>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodePhysioFieldContent = {
  __typename?: 'FieldNodePhysioFieldContent';
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetId?: Maybe<Scalars['Int']>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodePhysioFieldFormations = {
  __typename?: 'FieldNodePhysioFieldFormations';
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetId?: Maybe<Scalars['Int']>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodePhysioFieldHeadPhoto = {
  __typename?: 'FieldNodePhysioFieldHeadPhoto';
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


export type FieldNodePhysioFieldHeadPhotoDerivativeArgs = {
  style: ImageStyleId;
};

export type FieldNodePhysioFieldSpecialisations = {
  __typename?: 'FieldNodePhysioFieldSpecialisations';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** The user ID of the author of the current revision. */
export type FieldNodeRevisionUid = {
  __typename?: 'FieldNodeRevisionUid';
  /** The referenced entity */
  entity?: Maybe<User>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldNodeSoinBody = {
  __typename?: 'FieldNodeSoinBody';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldNodeSoinFieldContent = {
  __typename?: 'FieldNodeSoinFieldContent';
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetId?: Maybe<Scalars['Int']>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeSoinFieldImage = {
  __typename?: 'FieldNodeSoinFieldImage';
  /** The referenced entity */
  entity?: Maybe<Media>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldNodeSoinFieldPhysios = {
  __typename?: 'FieldNodeSoinFieldPhysios';
  /** The referenced entity */
  entity?: Maybe<Node>;
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

export type FieldParagraphAlertFieldIcon = {
  __typename?: 'FieldParagraphAlertFieldIcon';
  /** The referenced entity */
  entity?: Maybe<Media>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphAlertFieldText = {
  __typename?: 'FieldParagraphAlertFieldText';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldParagraphContainerMapFieldInfoWindow = {
  __typename?: 'FieldParagraphContainerMapFieldInfoWindow';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldParagraphContainerMapFieldUrl = {
  __typename?: 'FieldParagraphContainerMapFieldUrl';
  attribute?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


export type FieldParagraphContainerMapFieldUrlAttributeArgs = {
  key: Scalars['String'];
};

export type FieldParagraphFormationLineFieldDescription = {
  __typename?: 'FieldParagraphFormationLineFieldDescription';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldParagraphGalleryFieldImages = {
  __typename?: 'FieldParagraphGalleryFieldImages';
  /** The referenced entity */
  entity?: Maybe<Media>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphIconTextItemFieldIcon = {
  __typename?: 'FieldParagraphIconTextItemFieldIcon';
  /** The referenced entity */
  entity?: Maybe<Media>;
  targetId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphIconTextItemFieldText = {
  __typename?: 'FieldParagraphIconTextItemFieldText';
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldParagraphIconTextListFieldItems = {
  __typename?: 'FieldParagraphIconTextListFieldItems';
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetId?: Maybe<Scalars['Int']>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The paragraphs entity language code. */
export type FieldParagraphLangcode = {
  __typename?: 'FieldParagraphLangcode';
  /** The referenced language */
  language?: Maybe<Language>;
  value?: Maybe<Scalars['String']>;
};

export type FieldParagraphTitleTextFieldText = {
  __typename?: 'FieldParagraphTitleTextFieldText';
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

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** The status of the file, temporary (FALSE) and permanent (TRUE). */
  status?: Maybe<Scalars['Boolean']>;
  svgRender?: Maybe<Scalars['String']>;
  /** The user ID of the file. */
  uid?: Maybe<FieldFileUid>;
  /** The URI to access the file (either local or remote). */
  uri?: Maybe<FieldFileUri>;
  url?: Maybe<Scalars['String']>;
  /** The file UUID. */
  uuid?: Maybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type FileEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type FileEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type FileEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type FileEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type FileEntityRenderedArgs = {
  mode?: InputMaybe<FileDisplayModeId>;
};


/** The '@type' entity type. */
export type FileEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type FileQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type FileSvgRenderArgs = {
  class?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

/** The available display modes for '@type' entities. */
export enum FileDisplayModeId {
  /** The 'Jeton (token)' display mode for 'Fichier' entities. */
  Token = 'TOKEN'
}

export type ImageResource = {
  __typename?: 'ImageResource';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export enum ImageStyleId {
  /** Crop thumbnail */
  Cropthumbnail = 'CROPTHUMBNAIL',
  /** Gallery LG */
  Gallerylg = 'GALLERYLG',
  /** Gallery Thumb (Focal 400x300) */
  Gallerythumb = 'GALLERYTHUMB',
  /** Gallery Thumb Lg */
  Gallerythumblg = 'GALLERYTHUMBLG',
  /** Image Header (1250w) */
  Imageheader1250W = 'IMAGEHEADER1250W',
  /** Large (480×480) */
  Large = 'LARGE',
  /** Lightbox */
  Lightbox = 'LIGHTBOX',
  /** Linkit result thumbnail */
  Linkitresultthumbnail = 'LINKITRESULTTHUMBNAIL',
  /** Vignette de la médiathèque (220x220) */
  Medialibrary = 'MEDIALIBRARY',
  /** Moyen (220x220) */
  Medium = 'MEDIUM',
  /** Physio Detail (250x250) */
  Physiodetail = 'PHYSIODETAIL',
  /** Physio List (150x150) */
  Physiolist = 'PHYSIOLIST',
  /** Physio Mini (100x100) */
  Physiomini = 'PHYSIOMINI',
  /** Soin LG (500px large) */
  Soinlg = 'SOINLG',
  /** Soin SM (250px height) */
  Soinsm = 'SOINSM',
  /** Vignette (100x100) */
  Thumbnail = 'THUMBNAIL',
  /** Large (1090) */
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
  /** French */
  Fr = 'FR'
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

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseFieldIconParagraph: EntityQueryResult;
  /** Reverse reference: @description */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference: @description */
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


/** The '@type' entity type. */
export type MediaEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type MediaEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type MediaEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type MediaEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MediaEntityRenderedArgs = {
  mode?: InputMaybe<MediaDisplayModeId>;
};


/** The '@type' entity type. */
export type MediaEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MediaEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type MediaQueryBundleArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MediaQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MediaQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MediaReverseFieldIconParagraphArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MediaReverseFieldImageNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MediaReverseFieldImagesParagraphArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum MediaDisplayModeId {
  /** The 'Contenu complet' display mode for 'Média' entities. */
  Full = 'FULL',
  /** The 'Media library' display mode for 'Média' entities. */
  Medialibrary = 'MEDIALIBRARY',
  /** The 'Jeton (token)' display mode for 'Média' entities. */
  Token = 'TOKEN'
}

/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIcon = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Media & {
  __typename?: 'MediaIcon';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldMediaSvg?: Maybe<FieldMediaIconFieldMediaSvg>;
  langcode?: Maybe<FieldMediaLangcode>;
  mid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference: @description */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseFieldIconParagraph: EntityQueryResult;
  /** Reverse reference: @description */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconEntityRenderedArgs = {
  mode?: InputMaybe<MediaDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconQueryBundleArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconReverseFieldIconParagraphArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconReverseFieldImageNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaIconReverseFieldImagesParagraphArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseFieldIconParagraph: EntityQueryResult;
  /** Reverse reference: @description */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageEntityRenderedArgs = {
  mode?: InputMaybe<MediaDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageQueryBundleArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageReverseFieldIconParagraphArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MediaImageReverseFieldImageNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
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

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
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


/** The '@type' entity type. */
export type MenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type MenuLinkContentEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type MenuLinkContentEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type MenuLinkContentEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MenuLinkContentEntityRenderedArgs = {
  mode?: InputMaybe<MenuLinkContentDisplayModeId>;
};


/** The '@type' entity type. */
export type MenuLinkContentEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type MenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type MenuLinkContentQueryRevisionUserArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum MenuLinkContentDisplayModeId {
  /** The 'Jeton (token)' display mode for 'Lien de menu personnalisé' entities. */
  Token = 'TOKEN'
}

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type MenuLinkContentMenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MenuLinkContentMenuLinkContentEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MenuLinkContentMenuLinkContentEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MenuLinkContentMenuLinkContentEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MenuLinkContentMenuLinkContentEntityRenderedArgs = {
  mode?: InputMaybe<MenuLinkContentDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MenuLinkContentMenuLinkContentEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type MenuLinkContentMenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
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

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseFieldPhysiosNode: EntityQueryResult;
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


/** The '@type' entity type. */
export type NodeEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type NodeEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type NodeEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type NodeEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type NodeEntityRenderedArgs = {
  mode?: InputMaybe<NodeDisplayModeId>;
};


/** The '@type' entity type. */
export type NodeEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type NodeEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type NodeQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type NodeQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type NodeQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type NodeReverseFieldPhysiosNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum NodeDisplayModeId {
  /** The 'Contenu complet' display mode for 'Contenu' entities. */
  Full = 'FULL',
  /** The 'RSS' display mode for 'Contenu' entities. */
  Rss = 'RSS',
  /** The 'Index de recherche' display mode for 'Contenu' entities. */
  Searchindex = 'SEARCHINDEX',
  /** The 'Résultat de recherche mettant en évidence la saisie' display mode for 'Contenu' entities. */
  Searchresult = 'SEARCHRESULT',
  /** The 'Accroche' display mode for 'Contenu' entities. */
  Teaser = 'TEASER',
  /** The 'Jeton (token)' display mode for 'Contenu' entities. */
  Token = 'TOKEN'
}

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldMetaTags?: Maybe<FieldNodePageFieldMetaTags>;
  langcode?: Maybe<FieldNodeLangcode>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  nid?: Maybe<Scalars['Int']>;
  path?: Maybe<FieldNodePath>;
  promote?: Maybe<Scalars['Boolean']>;
  /** Query reference: @description */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseFieldPhysiosNode: EntityQueryResult;
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


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageEntityRenderedArgs = {
  mode?: InputMaybe<NodeDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePageReverseFieldPhysiosNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysio = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Node & {
  __typename?: 'NodePhysio';
  body?: Maybe<FieldNodePhysioBody>;
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldAlert?: Maybe<Array<Maybe<FieldNodePhysioFieldAlert>>>;
  fieldContent?: Maybe<Array<Maybe<FieldNodePhysioFieldContent>>>;
  fieldDays?: Maybe<Scalars['String']>;
  fieldEmail?: Maybe<Scalars['String']>;
  fieldFormations?: Maybe<Array<Maybe<FieldNodePhysioFieldFormations>>>;
  fieldHeadPhoto?: Maybe<FieldNodePhysioFieldHeadPhoto>;
  fieldOrder?: Maybe<Scalars['Int']>;
  fieldPhone?: Maybe<Scalars['String']>;
  fieldSpecialisations?: Maybe<FieldNodePhysioFieldSpecialisations>;
  fieldTitre?: Maybe<Scalars['String']>;
  langcode?: Maybe<FieldNodeLangcode>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  nid?: Maybe<Scalars['Int']>;
  path?: Maybe<FieldNodePath>;
  promote?: Maybe<Scalars['Boolean']>;
  /** Query reference: @description */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseFieldPhysiosNode: EntityQueryResult;
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


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioEntityRenderedArgs = {
  mode?: InputMaybe<NodeDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodePhysioReverseFieldPhysiosNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoin = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Node & {
  __typename?: 'NodeSoin';
  body?: Maybe<FieldNodeSoinBody>;
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldButtonText?: Maybe<Scalars['String']>;
  fieldContent?: Maybe<Array<Maybe<FieldNodeSoinFieldContent>>>;
  fieldImage?: Maybe<FieldNodeSoinFieldImage>;
  fieldOrder?: Maybe<Scalars['Int']>;
  fieldPhysios?: Maybe<Array<Maybe<FieldNodeSoinFieldPhysios>>>;
  langcode?: Maybe<FieldNodeLangcode>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  nid?: Maybe<Scalars['Int']>;
  path?: Maybe<FieldNodePath>;
  promote?: Maybe<Scalars['Boolean']>;
  /** Query reference: @description */
  queryFieldImage?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryFieldPhysios?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseFieldPhysiosNode: EntityQueryResult;
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


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinEntityRenderedArgs = {
  mode?: InputMaybe<NodeDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinQueryFieldImageArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinQueryFieldPhysiosArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinQueryRevisionUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinQueryUidArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type NodeSoinReverseFieldPhysiosNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
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


/** The '@type' entity type. */
export type ParagraphEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type ParagraphEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type ParagraphEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type ParagraphEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type ParagraphEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@type' entity type. */
export type ParagraphEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type ParagraphEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type ParagraphQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlert = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphAlert';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldIcon?: Maybe<FieldParagraphAlertFieldIcon>;
  fieldStyle?: Maybe<Scalars['String']>;
  fieldText?: Maybe<FieldParagraphAlertFieldText>;
  fieldTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
  queryFieldIcon?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertQueryFieldIconArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphAlertQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMap = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphContainerMap';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldInfoWindow?: Maybe<FieldParagraphContainerMapFieldInfoWindow>;
  fieldMapUrl?: Maybe<Scalars['String']>;
  fieldPaddingBottom?: Maybe<Scalars['String']>;
  fieldPaddingTop?: Maybe<Scalars['String']>;
  fieldUrl?: Maybe<FieldParagraphContainerMapFieldUrl>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerMapQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldClasses?: Maybe<Scalars['String']>;
  fieldFullwidth?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<Scalars['String']>;
  fieldPaddingBottom?: Maybe<Scalars['String']>;
  fieldPaddingTop?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphContainerSimpleQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum ParagraphDisplayModeId {
  /** The 'Aperçu' display mode for 'Paragraphe' entities. */
  Preview = 'PREVIEW'
}

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLine = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphFormationLine';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldDescription?: Maybe<FieldParagraphFormationLineFieldDescription>;
  fieldYearEnd?: Maybe<Scalars['String']>;
  fieldYearStart?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphFormationLineQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldLightbox?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
  queryFieldImages?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryQueryFieldImagesArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphGalleryQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItem = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphIconTextItem';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldIcon?: Maybe<FieldParagraphIconTextItemFieldIcon>;
  fieldText?: Maybe<FieldParagraphIconTextItemFieldText>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
  queryFieldIcon?: Maybe<EntityQueryResult>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemQueryFieldIconArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextItemQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextList = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphIconTextList';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldItems?: Maybe<Array<Maybe<FieldParagraphIconTextListFieldItems>>>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphIconTextListQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysios = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphPhysios';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldDisplay?: Maybe<Scalars['String']>;
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPhysiosQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestations = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphPrestations';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphPrestationsQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitle = Entity & EntityOwnable & EntityPublishable & EntityRevisionable & Paragraph & {
  __typename?: 'ParagraphTitle';
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldText?: Maybe<FieldParagraphTitleTextFieldText>;
  fieldTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextEntityRenderedArgs = {
  mode?: InputMaybe<ParagraphDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ParagraphTitleTextQueryTypeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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


/** The '@type' entity type. */
export type PathAliasEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type PathAliasEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type PathAliasEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type PathAliasEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type PathAliasEntityRenderedArgs = {
  mode?: InputMaybe<PathAliasDisplayModeId>;
};


/** The '@type' entity type. */
export type PathAliasEntityRevisionsArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type PathAliasEntityTranslationArgs = {
  language: LanguageId;
};

/** The available display modes for '@type' entities. */
export enum PathAliasDisplayModeId {
  /** The 'Jeton (token)' display mode for 'Alias d'URL' entities. */
  Token = 'TOKEN'
}

export type Query = {
  __typename?: 'Query';
  /** Loads the list of available languages. */
  availableLanguages?: Maybe<Array<Maybe<Language>>>;
  /** Loads '@type' entities by their id. */
  configPagesById?: Maybe<ConfigPages>;
  /** Loads '@type' entities. */
  configPagesQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entities by their id. */
  cropById?: Maybe<Crop>;
  /** Loads '@type' entities. */
  cropQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entity revision by their revision id. */
  cropRevisionById?: Maybe<Crop>;
  currentUserContext?: Maybe<User>;
  /** Loads '@type' entities by their id. */
  fileById?: Maybe<File>;
  /** Loads '@type' entities. */
  fileQuery?: Maybe<EntityQueryResult>;
  languageInterfaceContext?: Maybe<Language>;
  /** Loads '@type' entities by their id. */
  mediaById?: Maybe<Media>;
  /** Loads '@type' entities. */
  mediaQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entity revision by their revision id. */
  mediaRevisionById?: Maybe<Media>;
  /** Loads a menu by its machine-readable name. */
  menuByName?: Maybe<Menu>;
  /** Loads '@type' entities by their id. */
  menuLinkContentById?: Maybe<MenuLinkContent>;
  /** Loads '@type' entities. */
  menuLinkContentQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entity revision by their revision id. */
  menuLinkContentRevisionById?: Maybe<MenuLinkContent>;
  /** Loads '@type' entities by their id. */
  nodeById?: Maybe<Node>;
  nodeContext?: Maybe<Node>;
  /** Loads '@type' entities. */
  nodeQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entity revision by their revision id. */
  nodeRevisionById?: Maybe<Node>;
  /** Loads '@type' entities by their id. */
  paragraphById?: Maybe<Paragraph>;
  /** Loads '@type' entities. */
  paragraphQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entity revision by their revision id. */
  paragraphRevisionById?: Maybe<Paragraph>;
  /** Loads '@type' entities by their id. */
  pathAliasById?: Maybe<PathAlias>;
  /** Loads '@type' entities. */
  pathAliasQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entity revision by their revision id. */
  pathAliasRevisionById?: Maybe<PathAlias>;
  /** Loads a route by its path. */
  route?: Maybe<Url>;
  /** Loads '@type' entities by their id. */
  shortcutById?: Maybe<Shortcut>;
  /** Loads '@type' entities. */
  shortcutQuery?: Maybe<EntityQueryResult>;
  /** Loads '@type' entities by their id. */
  userById?: Maybe<User>;
  /** Loads '@type' entities. */
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

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
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


/** The '@type' entity type. */
export type ShortcutEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type ShortcutEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type ShortcutEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type ShortcutEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type ShortcutEntityRenderedArgs = {
  mode?: InputMaybe<ShortcutDisplayModeId>;
};


/** The '@type' entity type. */
export type ShortcutEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type ShortcutQueryShortcutSetArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The '@bundle' bundle of the '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
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


/** The '@bundle' bundle of the '@type' entity type. */
export type ShortcutDefaultEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ShortcutDefaultEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ShortcutDefaultEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ShortcutDefaultEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ShortcutDefaultEntityRenderedArgs = {
  mode?: InputMaybe<ShortcutDisplayModeId>;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ShortcutDefaultEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@bundle' bundle of the '@type' entity type. */
export type ShortcutDefaultQueryShortcutSetArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum ShortcutDisplayModeId {
  /** The 'Jeton (token)' display mode for 'Lien de raccourci' entities. */
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

/** The '@type' entity type. */
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
  /** Renders '@type' entities in the given view mode. */
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
  /** Query reference: @description */
  queryRoles?: Maybe<EntityQueryResult>;
  /** Reverse reference: @description */
  reverseRevisionUidCrop: EntityQueryResult;
  /** Reverse reference: @description */
  reverseRevisionUidNode: EntityQueryResult;
  /** Reverse reference: @description */
  reverseRevisionUserMedia: EntityQueryResult;
  /** Reverse reference: @description */
  reverseRevisionUserMenuLinkContent: EntityQueryResult;
  /** Reverse reference: @description */
  reverseUidFile: EntityQueryResult;
  /** Reverse reference: @description */
  reverseUidMedia: EntityQueryResult;
  /** Reverse reference: @description */
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


/** The '@type' entity type. */
export type UserEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The '@type' entity type. */
export type UserEntityChangedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type UserEntityCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** The '@type' entity type. */
export type UserEntityQueryExclusiveArgs = {
  bundles?: InputMaybe<EntityQueryBundleMode>;
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserEntityRenderedArgs = {
  mode?: InputMaybe<UserDisplayModeId>;
};


/** The '@type' entity type. */
export type UserEntityTranslationArgs = {
  language: LanguageId;
};


/** The '@type' entity type. */
export type UserQueryRolesArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserReverseRevisionUidCropArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserReverseRevisionUidNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserReverseRevisionUserMediaArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserReverseRevisionUserMenuLinkContentArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserReverseUidFileArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserReverseUidMediaArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};


/** The '@type' entity type. */
export type UserReverseUidNodeArgs = {
  filter?: InputMaybe<EntityQueryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  revisions?: InputMaybe<EntityQueryRevisionMode>;
  sort?: InputMaybe<Array<InputMaybe<EntityQuerySortInput>>>;
};

/** The available display modes for '@type' entities. */
export enum UserDisplayModeId {
  /** The 'Compact' display mode for 'Utilisateur' entities. */
  Compact = 'COMPACT',
  /** The 'Compte utilisateur' display mode for 'Utilisateur' entities. */
  Full = 'FULL',
  /** The 'Jeton (token)' display mode for 'Utilisateur' entities. */
  Token = 'TOKEN'
}

export type ConfigPageQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type ConfigPageQuery = { __typename?: 'Query', configPagesQuery?: { __typename?: 'EntityQueryResult', entities?: Array<{ __typename?: 'ConfigPagesSettings', entityLabel?: string | null } | { __typename?: 'CropFocalPoint' } | { __typename?: 'CropSquare' } | { __typename?: 'File' } | { __typename?: 'MediaIcon' } | { __typename?: 'MediaImage' } | { __typename?: 'MenuLinkContentMenuLinkContent' } | { __typename?: 'NodePage' } | { __typename?: 'NodePhysio' } | { __typename?: 'NodeSoin' } | { __typename?: 'ParagraphAlert' } | { __typename?: 'ParagraphContainerMap' } | { __typename?: 'ParagraphContainerSimple' } | { __typename?: 'ParagraphFormationLine' } | { __typename?: 'ParagraphGallery' } | { __typename?: 'ParagraphIconTextItem' } | { __typename?: 'ParagraphIconTextList' } | { __typename?: 'ParagraphPhysios' } | { __typename?: 'ParagraphPrestations' } | { __typename?: 'ParagraphTitle' } | { __typename?: 'ParagraphTitleText' } | { __typename?: 'PathAlias' } | { __typename?: 'ShortcutDefault' } | { __typename?: 'UnexposedEntity' } | { __typename?: 'User' } | null> | null } | null };

export type ConfigPageSettingsFieldsFragment = { __typename?: 'ConfigPagesSettings', entityLabel?: string | null };

export type EntityByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type EntityByPathQuery = { __typename?: 'Query', route?: { __typename?: 'DefaultInternalUrl' } | { __typename?: 'EntityCanonicalUrl', entity?: { __typename: 'ConfigPagesSettings', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'CropFocalPoint', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'CropSquare', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'File', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'MediaIcon', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'MediaImage', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'MenuLinkContentMenuLinkContent', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'NodePage', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null, fieldContent?: Array<{ __typename?: 'FieldNodePageFieldContent', entity?: { __typename: 'ParagraphAlert', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphContainerMap', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphContainerSimple', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphFormationLine', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphGallery', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphIconTextItem', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphIconTextList', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphPhysios', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphPrestations', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphTitle', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphTitleText', behaviorSettings?: string | null, uuid?: string | null, id?: number | null, fieldTitle?: string | null, fieldText?: { __typename?: 'FieldParagraphTitleTextFieldText', value?: string | null, format?: string | null, processed?: string | null } | null } | null } | null> | null } | { __typename: 'NodePhysio', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'NodeSoin', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphAlert', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphContainerMap', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphContainerSimple', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphFormationLine', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphGallery', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphIconTextItem', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphIconTextList', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphPhysios', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphPrestations', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphTitle', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ParagraphTitleText', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'PathAlias', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'ShortcutDefault', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'UnexposedEntity', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | { __typename: 'User', entityMetatags?: Array<{ __typename: 'MetaHttpEquiv', key?: string | null, value?: any | null } | { __typename: 'MetaItemProp', key?: string | null, value?: any | null } | { __typename: 'MetaLink', key?: string | null, value?: any | null } | { __typename: 'MetaLinkHreflang', key?: string | null, value?: any | null } | { __typename: 'MetaProperty', key?: string | null, value?: any | null } | { __typename: 'MetaValue', key?: string | null, value?: any | null } | null> | null } | null } | { __typename?: 'ExternalUrl' } | null };

export type MenuQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type MenuQuery = { __typename?: 'Query', menuByName?: { __typename?: 'Menu', links?: Array<{ __typename?: 'MenuLink', label?: string | null, description?: string | null, links?: Array<{ __typename?: 'MenuLink', label?: string | null, description?: string | null, url?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | null> | null, url?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | null> | null } | null };

export type MenuLinksFragment = { __typename?: 'MenuLink', label?: string | null, description?: string | null, url?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null };

export type NodePageFieldsFragment = { __typename?: 'NodePage', fieldContent?: Array<{ __typename?: 'FieldNodePageFieldContent', entity?: { __typename: 'ParagraphAlert', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphContainerMap', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphContainerSimple', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphFormationLine', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphGallery', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphIconTextItem', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphIconTextList', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphPhysios', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphPrestations', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphTitle', behaviorSettings?: string | null, uuid?: string | null, id?: number | null } | { __typename: 'ParagraphTitleText', behaviorSettings?: string | null, uuid?: string | null, id?: number | null, fieldTitle?: string | null, fieldText?: { __typename?: 'FieldParagraphTitleTextFieldText', value?: string | null, format?: string | null, processed?: string | null } | null } | null } | null> | null };

export type ParagraphTitleTextFragment = { __typename?: 'ParagraphTitleText', fieldTitle?: string | null, fieldText?: { __typename?: 'FieldParagraphTitleTextFieldText', value?: string | null, format?: string | null, processed?: string | null } | null };

export type PathsQueryVariables = Exact<{ [key: string]: never; }>;


export type PathsQuery = { __typename?: 'Query', nodeQuery?: { __typename?: 'EntityQueryResult', entities?: Array<{ __typename?: 'ConfigPagesSettings', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'CropFocalPoint', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'CropSquare', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'File', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'MediaIcon', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'MediaImage', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'MenuLinkContentMenuLinkContent', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'NodePage', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'NodePhysio', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'NodeSoin', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphAlert', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphContainerMap', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphContainerSimple', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphFormationLine', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphGallery', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphIconTextItem', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphIconTextList', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphPhysios', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphPrestations', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphTitle', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ParagraphTitleText', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'PathAlias', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'ShortcutDefault', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'UnexposedEntity', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | { __typename?: 'User', entityLabel?: string | null, entityType?: string | null, entityBundle?: string | null, entityUrl?: { __typename?: 'DefaultInternalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'EntityCanonicalUrl', path?: string | null, routed?: boolean | null } | { __typename?: 'ExternalUrl', path?: string | null, routed?: boolean | null } | null } | null> | null } | null };

export const ConfigPageSettingsFieldsFragmentDoc = gql`
    fragment ConfigPageSettingsFields on ConfigPagesSettings {
  entityLabel
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
  fieldTitle
  fieldText {
    value
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
}
    ${ParagraphTitleTextFragmentDoc}`;
export const ConfigPageDocument = gql`
    query ConfigPage($type: String!) {
  configPagesQuery(
    filter: {conditions: {operator: EQUAL, field: "type", value: [$type]}}
  ) {
    entities {
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
        __typename
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
      }
    }
  }
}
    ${MenuLinksFragmentDoc}`;
export const PathsDocument = gql`
    query Paths {
  nodeQuery(limit: 100, filter: {conditions: [{field: "status", value: "1"}]}) {
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
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    ConfigPage(variables: ConfigPageQueryVariables, options?: C): Promise<ConfigPageQuery> {
      return requester<ConfigPageQuery, ConfigPageQueryVariables>(ConfigPageDocument, variables, options) as Promise<ConfigPageQuery>;
    },
    EntityByPath(variables: EntityByPathQueryVariables, options?: C): Promise<EntityByPathQuery> {
      return requester<EntityByPathQuery, EntityByPathQueryVariables>(EntityByPathDocument, variables, options) as Promise<EntityByPathQuery>;
    },
    Menu(variables: MenuQueryVariables, options?: C): Promise<MenuQuery> {
      return requester<MenuQuery, MenuQueryVariables>(MenuDocument, variables, options) as Promise<MenuQuery>;
    },
    Paths(variables?: PathsQueryVariables, options?: C): Promise<PathsQuery> {
      return requester<PathsQuery, PathsQueryVariables>(PathsDocument, variables, options) as Promise<PathsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;