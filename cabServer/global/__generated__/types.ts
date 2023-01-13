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
  Date: any;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  PageContentSectionsDynamicZoneInput: any;
  Time: any;
  Upload: any;
};

export type Achievement = {
  __typename?: 'Achievement';
  badge?: Maybe<UploadFileEntityResponse>;
  course?: Maybe<Scalars['String']>;
  course_date?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  type?: Maybe<Enum_Achievement_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AchievementEntity = {
  __typename?: 'AchievementEntity';
  attributes?: Maybe<Achievement>;
  id?: Maybe<Scalars['ID']>;
};

export type AchievementEntityResponse = {
  __typename?: 'AchievementEntityResponse';
  data?: Maybe<AchievementEntity>;
};

export type AchievementEntityResponseCollection = {
  __typename?: 'AchievementEntityResponseCollection';
  data: Array<AchievementEntity>;
  meta: ResponseCollectionMeta;
};

export type AchievementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  course?: InputMaybe<StringFilterInput>;
  course_date?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AchievementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  points?: InputMaybe<IntFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AchievementInput = {
  badge?: InputMaybe<Scalars['ID']>;
  course?: InputMaybe<Scalars['String']>;
  course_date?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Enum_Achievement_Type>;
};

export type AchievementRelationResponseCollection = {
  __typename?: 'AchievementRelationResponseCollection';
  data: Array<AchievementEntity>;
};

export type Attendance = {
  __typename?: 'Attendance';
  createdAt?: Maybe<Scalars['DateTime']>;
  day?: Maybe<Scalars['Date']>;
  done?: Maybe<Scalars['Boolean']>;
  excuse?: Maybe<Scalars['String']>;
  hours?: Maybe<Array<Maybe<ComponentHoursHours>>>;
  student?: Maybe<StudentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AttendanceHoursArgs = {
  filters?: InputMaybe<ComponentHoursHoursFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AttendanceEntity = {
  __typename?: 'AttendanceEntity';
  attributes?: Maybe<Attendance>;
  id?: Maybe<Scalars['ID']>;
};

export type AttendanceEntityResponse = {
  __typename?: 'AttendanceEntityResponse';
  data?: Maybe<AttendanceEntity>;
};

export type AttendanceEntityResponseCollection = {
  __typename?: 'AttendanceEntityResponseCollection';
  data: Array<AttendanceEntity>;
  meta: ResponseCollectionMeta;
};

export type AttendanceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AttendanceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  day?: InputMaybe<DateFilterInput>;
  done?: InputMaybe<BooleanFilterInput>;
  excuse?: InputMaybe<StringFilterInput>;
  hours?: InputMaybe<ComponentHoursHoursFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AttendanceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AttendanceFiltersInput>>>;
  student?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AttendanceInput = {
  day?: InputMaybe<Scalars['Date']>;
  done?: InputMaybe<Scalars['Boolean']>;
  excuse?: InputMaybe<Scalars['String']>;
  hours?: InputMaybe<Array<InputMaybe<ComponentHoursHoursInput>>>;
  student?: InputMaybe<Scalars['ID']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Cohort = {
  __typename?: 'Cohort';
  createdAt?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  students?: Maybe<StudentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CohortStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CohortEntity = {
  __typename?: 'CohortEntity';
  attributes?: Maybe<Cohort>;
  id?: Maybe<Scalars['ID']>;
};

export type CohortEntityResponse = {
  __typename?: 'CohortEntityResponse';
  data?: Maybe<CohortEntity>;
};

export type CohortEntityResponseCollection = {
  __typename?: 'CohortEntityResponseCollection';
  data: Array<CohortEntity>;
  meta: ResponseCollectionMeta;
};

export type CohortFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CohortFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  start_date?: InputMaybe<DateFilterInput>;
  students?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CohortInput = {
  logo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['Date']>;
  students?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentAchievementAchievement = {
  __typename?: 'ComponentAchievementAchievement';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type ComponentAttendanceAttendanceDay = {
  __typename?: 'ComponentAttendanceAttendanceDay';
  id: Scalars['ID'];
};

export type ComponentAttendanceAttendanceHour = {
  __typename?: 'ComponentAttendanceAttendanceHour';
  hour?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  present?: Maybe<Scalars['Boolean']>;
};

export type ComponentCardsBlogCard = {
  __typename?: 'ComponentCardsBlogCard';
  dateTime?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommentsComments = {
  __typename?: 'ComponentCommentsComments';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type ComponentCommentsCommentsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommentsCommentsFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommentsCommentsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommentsCommentsFiltersInput>>>;
  timestamp?: InputMaybe<DateTimeFilterInput>;
};

export type ComponentCommentsCommentsInput = {
  author?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
};

export type ComponentElementsFeature = {
  __typename?: 'ComponentElementsFeature';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentElementsFeatureColumn = {
  __typename?: 'ComponentElementsFeatureColumn';
  description?: Maybe<Scalars['String']>;
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentElementsFeatureColumnFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentElementsFeatureColumnFiltersInput>>
  >;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFeatureColumnFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentElementsFeatureColumnFiltersInput>>
  >;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureFiltersInput>>>;
};

export type ComponentElementsFeatureRow = {
  __typename?: 'ComponentElementsFeatureRow';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<ComponentLinksLink>;
  media: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentElementsFeatureRowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureRowFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentLinksLinkFiltersInput>;
  not?: InputMaybe<ComponentElementsFeatureRowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureRowFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFooterSection = {
  __typename?: 'ComponentElementsFooterSection';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentElementsFooterSectionLinksArgs = {
  filters?: InputMaybe<ComponentLinksLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentElementsFooterSectionFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentElementsFooterSectionFiltersInput>>
  >;
  links?: InputMaybe<ComponentLinksLinkFiltersInput>;
  not?: InputMaybe<ComponentElementsFooterSectionFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentElementsFooterSectionFiltersInput>>
  >;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsLogos = {
  __typename?: 'ComponentElementsLogos';
  id: Scalars['ID'];
  logo?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentElementsLogosFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsLogosFiltersInput>>>;
  not?: InputMaybe<ComponentElementsLogosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsLogosFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsNotificationBanner = {
  __typename?: 'ComponentElementsNotificationBanner';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  type: Enum_Componentelementsnotificationbanner_Type;
};

export type ComponentElementsPlan = {
  __typename?: 'ComponentElementsPlan';
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentElementsFeature>>>;
  id: Scalars['ID'];
  isRecommended?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
};

export type ComponentElementsPlanFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentElementsPlanFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsPlanFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  features?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  isRecommended?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsPlanFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsPlanFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  pricePeriod?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsTestimonial = {
  __typename?: 'ComponentElementsTestimonial';
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFileEntityResponse>;
  picture?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentElementsTestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsTestimonialFiltersInput>>>;
  authorName?: InputMaybe<StringFilterInput>;
  authorTitle?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsTestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsTestimonialFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentHolidaysHolidays = {
  __typename?: 'ComponentHolidaysHolidays';
  day?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentHolidaysHolidaysFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHolidaysHolidaysFiltersInput>>>;
  day?: InputMaybe<DateFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHolidaysHolidaysFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHolidaysHolidaysFiltersInput>>>;
};

export type ComponentHolidaysHolidaysInput = {
  day?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentHoursHours = {
  __typename?: 'ComponentHoursHours';
  hour?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  present?: Maybe<Scalars['Boolean']>;
};

export type ComponentHoursHoursFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHoursHoursFiltersInput>>>;
  hour?: InputMaybe<TimeFilterInput>;
  not?: InputMaybe<ComponentHoursHoursFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHoursHoursFiltersInput>>>;
  present?: InputMaybe<BooleanFilterInput>;
};

export type ComponentHoursHoursInput = {
  hour?: InputMaybe<Scalars['Time']>;
  id?: InputMaybe<Scalars['ID']>;
  present?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentLayoutFooter = {
  __typename?: 'ComponentLayoutFooter';
  columns?: Maybe<Array<Maybe<ComponentElementsFooterSection>>>;
  id: Scalars['ID'];
  logo?: Maybe<UploadFileEntityResponse>;
  smallText?: Maybe<Scalars['String']>;
};

export type ComponentLayoutFooterColumnsArgs = {
  filters?: InputMaybe<ComponentElementsFooterSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLayoutNavbar = {
  __typename?: 'ComponentLayoutNavbar';
  button?: Maybe<ComponentLinksButtonLink>;
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
  logo: UploadFileEntityResponse;
};

export type ComponentLayoutNavbarLinksArgs = {
  filters?: InputMaybe<ComponentLinksLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLinksButton = {
  __typename?: 'ComponentLinksButton';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
};

export type ComponentLinksButtonLink = {
  __typename?: 'ComponentLinksButtonLink';
  id: Scalars['ID'];
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbuttonlink_Type>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentLinksButtonLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksButtonLinkFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksButtonLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLinksLink = {
  __typename?: 'ComponentLinksLink';
  id: Scalars['ID'];
  newTab?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentLinksLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksLinkFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLinksLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentMetaMetadata = {
  __typename?: 'ComponentMetaMetadata';
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shareImage?: Maybe<UploadFileEntityResponse>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type ComponentMetaMetadataFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMetaMetadataFiltersInput>>>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMetaMetadataFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMetaMetadataFiltersInput>>>;
  twitterCardType?: InputMaybe<StringFilterInput>;
  twitterUsername?: InputMaybe<StringFilterInput>;
};

export type ComponentMetaMetadataInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  shareImage?: InputMaybe<Scalars['ID']>;
  twitterCardType?: InputMaybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsBottomActions = {
  __typename?: 'ComponentSectionsBottomActions';
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsBottomActionsButtonsArgs = {
  filters?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsFeatureColumnsGroup = {
  __typename?: 'ComponentSectionsFeatureColumnsGroup';
  features?: Maybe<Array<Maybe<ComponentElementsFeatureColumn>>>;
  id: Scalars['ID'];
};

export type ComponentSectionsFeatureColumnsGroupFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsFeatureRowsGroup = {
  __typename?: 'ComponentSectionsFeatureRowsGroup';
  features?: Maybe<Array<Maybe<ComponentElementsFeatureRow>>>;
  id: Scalars['ID'];
};

export type ComponentSectionsFeatureRowsGroupFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureRowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  smallTextWithLink?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsHeroButtonsArgs = {
  filters?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsLargeVideo = {
  __typename?: 'ComponentSectionsLargeVideo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  poster?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
  video: UploadFileEntityResponse;
};

export type ComponentSectionsLeadForm = {
  __typename?: 'ComponentSectionsLeadForm';
  emailPlaceholder?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  submitButton?: Maybe<ComponentLinksButton>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsPricing = {
  __typename?: 'ComponentSectionsPricing';
  id: Scalars['ID'];
  plans?: Maybe<Array<Maybe<ComponentElementsPlan>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsPricingPlansArgs = {
  filters?: InputMaybe<ComponentElementsPlanFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsRichText = {
  __typename?: 'ComponentSectionsRichText';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentSectionsTestimonialsGroup = {
  __typename?: 'ComponentSectionsTestimonialsGroup';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<ComponentLinksLink>;
  logos?: Maybe<Array<Maybe<ComponentElementsLogos>>>;
  testimonials?: Maybe<Array<Maybe<ComponentElementsTestimonial>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsTestimonialsGroupLogosArgs = {
  filters?: InputMaybe<ComponentElementsLogosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsTestimonialsGroupTestimonialsArgs = {
  filters?: InputMaybe<ComponentElementsTestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Course = {
  __typename?: 'Course';
  achievements?: Maybe<AchievementRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  mentors?: Maybe<MentorEntityResponse>;
  name?: Maybe<Scalars['String']>;
  spike?: Maybe<SpikeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CourseAchievementsArgs = {
  filters?: InputMaybe<AchievementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars['ID']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data?: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  achievements?: InputMaybe<AchievementFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  length?: InputMaybe<IntFilterInput>;
  mentors?: InputMaybe<MentorFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  spike?: InputMaybe<SpikeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  achievements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Int']>;
  mentors?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  spike?: InputMaybe<Scalars['ID']>;
};

export type CourseRelationResponseCollection = {
  __typename?: 'CourseRelationResponseCollection';
  data: Array<CourseEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Commentscommentreport_Reason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER',
}

export enum Enum_Componentelementsnotificationbanner_Type {
  Alert = 'alert',
  Info = 'info',
  Warning = 'warning',
}

export enum Enum_Componentlinksbuttonlink_Type {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Enum_Componentlinksbutton_Type {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Enum_Componentmetametadata_Twittercardtype {
  App = 'app',
  Player = 'player',
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image',
}

export enum Enum_Jobpost_Field {
  DataScience = 'Data_Science',
  Other = 'Other',
  WebDevelopment = 'Web_Development',
}

export enum Enum_Lead_Cablifecycle {
  Confirmed = 'Confirmed',
  Lead = 'Lead',
  Out = 'Out',
  Student = 'Student',
}

export enum Enum_Lead_Marketingfunnel {
  Coursereport = 'coursereport',
  Facebook = 'facebook',
  Google = 'google',
  Instagram = 'instagram',
  Kursenet = 'kursenet',
  Linkedin = 'linkedin',
  Other = 'other',
  Switchup = 'switchup',
  Undefined = 'undefined',
  Wdb = 'wdb',
}

export type EmailDesignerEmailTemplate = {
  __typename?: 'EmailDesignerEmailTemplate';
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  design?: Maybe<Scalars['JSON']>;
  enabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  templateReferenceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmailDesignerEmailTemplateEntity = {
  __typename?: 'EmailDesignerEmailTemplateEntity';
  attributes?: Maybe<EmailDesignerEmailTemplate>;
  id?: Maybe<Scalars['ID']>;
};

export type EmailDesignerEmailTemplateEntityResponse = {
  __typename?: 'EmailDesignerEmailTemplateEntityResponse';
  data?: Maybe<EmailDesignerEmailTemplateEntity>;
};

export type EmailDesignerEmailTemplateEntityResponseCollection = {
  __typename?: 'EmailDesignerEmailTemplateEntityResponseCollection';
  data: Array<EmailDesignerEmailTemplateEntity>;
  meta: ResponseCollectionMeta;
};

export type EmailDesignerEmailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>;
  bodyHtml?: InputMaybe<StringFilterInput>;
  bodyText?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  design?: InputMaybe<JsonFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>;
  subject?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  templateReferenceId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmailDesignerEmailTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']>;
  bodyText?: InputMaybe<Scalars['String']>;
  design?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  templateReferenceId?: InputMaybe<Scalars['Int']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
  | Achievement
  | Attendance
  | Cohort
  | CommentsComment
  | CommentsCommentReport
  | ComponentAchievementAchievement
  | ComponentAttendanceAttendanceDay
  | ComponentAttendanceAttendanceHour
  | ComponentCardsBlogCard
  | ComponentElementsFeature
  | ComponentElementsFeatureColumn
  | ComponentElementsFeatureRow
  | ComponentElementsFooterSection
  | ComponentElementsLogos
  | ComponentElementsNotificationBanner
  | ComponentElementsPlan
  | ComponentElementsTestimonial
  | ComponentHolidaysHolidays
  | ComponentHoursHours
  | ComponentLayoutFooter
  | ComponentLayoutNavbar
  | ComponentLinksButton
  | ComponentLinksButtonLink
  | ComponentLinksLink
  | ComponentMetaMetadata
  | ComponentSectionsBottomActions
  | ComponentSectionsFeatureColumnsGroup
  | ComponentSectionsFeatureRowsGroup
  | ComponentSectionsHero
  | ComponentSectionsLargeVideo
  | ComponentSectionsLeadForm
  | ComponentSectionsPricing
  | ComponentSectionsRichText
  | ComponentSectionsTestimonialsGroup
  | Course
  | EmailDesignerEmailTemplate
  | Holiday
  | I18NLocale
  | JobPost
  | Lead
  | Mentor
  | Page
  | Student
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | VsBattle;

export type Holiday = {
  __typename?: 'Holiday';
  createdAt?: Maybe<Scalars['DateTime']>;
  holidays?: Maybe<Array<Maybe<ComponentHolidaysHolidays>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HolidayHolidaysArgs = {
  filters?: InputMaybe<ComponentHolidaysHolidaysFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HolidayEntity = {
  __typename?: 'HolidayEntity';
  attributes?: Maybe<Holiday>;
  id?: Maybe<Scalars['ID']>;
};

export type HolidayEntityResponse = {
  __typename?: 'HolidayEntityResponse';
  data?: Maybe<HolidayEntity>;
};

export type HolidayEntityResponseCollection = {
  __typename?: 'HolidayEntityResponseCollection';
  data: Array<HolidayEntity>;
  meta: ResponseCollectionMeta;
};

export type HolidayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HolidayFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  holidays?: InputMaybe<ComponentHolidaysHolidaysFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HolidayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HolidayFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HolidayInput = {
  holidays?: InputMaybe<Array<InputMaybe<ComponentHolidaysHolidaysInput>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type JobPost = {
  __typename?: 'JobPost';
  company?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Enum_Jobpost_Field>;
  position?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type JobPostEntity = {
  __typename?: 'JobPostEntity';
  attributes?: Maybe<JobPost>;
  id?: Maybe<Scalars['ID']>;
};

export type JobPostEntityResponse = {
  __typename?: 'JobPostEntityResponse';
  data?: Maybe<JobPostEntity>;
};

export type JobPostEntityResponseCollection = {
  __typename?: 'JobPostEntityResponseCollection';
  data: Array<JobPostEntity>;
  meta: ResponseCollectionMeta;
};

export type JobPostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobPostFiltersInput>>>;
  company?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  field?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<JobPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobPostFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type JobPostInput = {
  company?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Enum_Jobpost_Field>;
  position?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Lead = {
  __typename?: 'Lead';
  bildungsgutschein?: Maybe<Scalars['String']>;
  cablifecycle?: Maybe<Enum_Lead_Cablifecycle>;
  country?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  ipCity?: Maybe<Scalars['String']>;
  ipCountry?: Maybe<Scalars['String']>;
  ipZip?: Maybe<Scalars['String']>;
  main_course?: Maybe<CourseEntityResponse>;
  marketingfunnel?: Maybe<Enum_Lead_Marketingfunnel>;
  status?: Maybe<Scalars['String']>;
  unsubscribed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LeadEntity = {
  __typename?: 'LeadEntity';
  attributes?: Maybe<Lead>;
  id?: Maybe<Scalars['ID']>;
};

export type LeadEntityResponse = {
  __typename?: 'LeadEntityResponse';
  data?: Maybe<LeadEntity>;
};

export type LeadEntityResponseCollection = {
  __typename?: 'LeadEntityResponseCollection';
  data: Array<LeadEntity>;
  meta: ResponseCollectionMeta;
};

export type LeadFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LeadFiltersInput>>>;
  bildungsgutschein?: InputMaybe<StringFilterInput>;
  cablifecycle?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  course?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  ipCity?: InputMaybe<StringFilterInput>;
  ipCountry?: InputMaybe<StringFilterInput>;
  ipZip?: InputMaybe<StringFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  main_course?: InputMaybe<CourseFiltersInput>;
  marketingfunnel?: InputMaybe<StringFilterInput>;
  msg?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LeadFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LeadFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  unsubscribed?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LeadInput = {
  bildungsgutschein?: InputMaybe<Scalars['String']>;
  cablifecycle?: InputMaybe<Enum_Lead_Cablifecycle>;
  country?: InputMaybe<Scalars['String']>;
  course?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  ipCity?: InputMaybe<Scalars['String']>;
  ipCountry?: InputMaybe<Scalars['String']>;
  ipZip?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  main_course?: InputMaybe<Scalars['ID']>;
  marketingfunnel?: InputMaybe<Enum_Lead_Marketingfunnel>;
  msg?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  unsubscribed?: InputMaybe<Scalars['Boolean']>;
};

export type Mentor = {
  __typename?: 'Mentor';
  avatar?: Maybe<UploadFileEntityResponse>;
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstname?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  specialization?: Maybe<Enum_Mentor_Specialization>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type MentorCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MentorEntity = {
  __typename?: 'MentorEntity';
  attributes?: Maybe<Mentor>;
  id?: Maybe<Scalars['ID']>;
};

export type MentorEntityResponse = {
  __typename?: 'MentorEntityResponse';
  data?: Maybe<MentorEntity>;
};

export type MentorEntityResponseCollection = {
  __typename?: 'MentorEntityResponseCollection';
  data: Array<MentorEntity>;
  meta: ResponseCollectionMeta;
};

export type MentorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MentorFiltersInput>>>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  github?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MentorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MentorFiltersInput>>>;
  specialization?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type MentorInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  firstname?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  specialization?: InputMaybe<Enum_Mentor_Specialization>;
  user?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAchievement?: Maybe<AchievementEntityResponse>;
  createAttendance?: Maybe<AttendanceEntityResponse>;
  createCodacOverflow?: Maybe<CodacOverflowEntityResponse>;
  createCohort?: Maybe<CohortEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  createHoliday?: Maybe<HolidayEntityResponse>;
  createJobPost?: Maybe<JobPostEntityResponse>;
  createLead?: Maybe<LeadEntityResponse>;
  createLmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  createMentor?: Maybe<MentorEntityResponse>;
  createNewsPost?: Maybe<NewsPostEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createSpike?: Maybe<SpikeEntityResponse>;
  createStudent?: Maybe<StudentEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVsBattle?: Maybe<VsBattleEntityResponse>;
  deleteAchievement?: Maybe<AchievementEntityResponse>;
  deleteAttendance?: Maybe<AttendanceEntityResponse>;
  deleteCodacOverflow?: Maybe<CodacOverflowEntityResponse>;
  deleteCohort?: Maybe<CohortEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  deleteHoliday?: Maybe<HolidayEntityResponse>;
  deleteJobPost?: Maybe<JobPostEntityResponse>;
  deleteLead?: Maybe<LeadEntityResponse>;
  deleteLmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  deleteMentor?: Maybe<MentorEntityResponse>;
  deleteNewsPost?: Maybe<NewsPostEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteSpike?: Maybe<SpikeEntityResponse>;
  deleteStudent?: Maybe<StudentEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVsBattle?: Maybe<VsBattleEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAchievement?: Maybe<AchievementEntityResponse>;
  updateAttendance?: Maybe<AttendanceEntityResponse>;
  updateCodacOverflow?: Maybe<CodacOverflowEntityResponse>;
  updateCohort?: Maybe<CohortEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHoliday?: Maybe<HolidayEntityResponse>;
  updateJobPost?: Maybe<JobPostEntityResponse>;
  updateLead?: Maybe<LeadEntityResponse>;
  updateLmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  updateMentor?: Maybe<MentorEntityResponse>;
  updateNewsPost?: Maybe<NewsPostEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateSpike?: Maybe<SpikeEntityResponse>;
  updateStudent?: Maybe<StudentEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVsBattle?: Maybe<VsBattleEntityResponse>;
  upload: UploadFileEntityResponse;
  /**
   * This Mutation updates the corresponding battle with user voting option
   * and removes the vote on the other option if present. It will remove the vote if voting the same option is voted again
   */
  voteVsBattle?: Maybe<VsBattle>;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationCreateAchievementArgs = {
  data: AchievementInput;
};

export type MutationCreateAttendanceArgs = {
  data: AttendanceInput;
};

export type MutationCreateCohortArgs = {
  data: CohortInput;
};

export type MutationCreateCommentsCommentArgs = {
  data: CommentsCommentInput;
};

export type MutationCreateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput;
};

export type MutationCreateCourseArgs = {
  data: CourseInput;
};

export type MutationCreateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput;
};

export type MutationCreateHolidayArgs = {
  data: HolidayInput;
};

export type MutationCreateJobPostArgs = {
  data: JobPostInput;
};

export type MutationCreateLeadArgs = {
  data: LeadInput;
};

export type MutationCreateMentorArgs = {
  data: MentorInput;
};

export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateStudentArgs = {
  data: StudentInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationCreateVsBattleArgs = {
  data: VsBattleInput;
};

export type MutationDeleteAchievementArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteAttendanceArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCohortArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCommentsCommentArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCommentsCommentReportArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteEmailDesignerEmailTemplateArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteHolidayArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteJobPostArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLeadArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLmsFeedbackArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLmsFeedbackArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteMentorArgs = {
  id: Scalars['ID'];
};

export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteVsBattleArgs = {
  id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateAchievementArgs = {
  data: AchievementInput;
  id: Scalars['ID'];
};

export type MutationUpdateAttendanceArgs = {
  data: AttendanceInput;
  id: Scalars['ID'];
};

export type MutationUpdateCohortArgs = {
  data: CohortInput;
  id: Scalars['ID'];
};

export type MutationUpdateCommentsCommentArgs = {
  data: CommentsCommentInput;
  id: Scalars['ID'];
};

export type MutationUpdateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput;
  id: Scalars['ID'];
};

export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID'];
};

export type MutationUpdateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput;
  id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateHolidayArgs = {
  data: HolidayInput;
  id: Scalars['ID'];
};

export type MutationUpdateJobPostArgs = {
  data: JobPostInput;
  id: Scalars['ID'];
};

export type MutationUpdateLeadArgs = {
  data: LeadInput;
  id: Scalars['ID'];
};

export type MutationUpdateMentorArgs = {
  data: MentorInput;
  id: Scalars['ID'];
};

export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};

export type MutationUpdateVsBattleArgs = {
  data: VsBattleInput;
  id: Scalars['ID'];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  __typename?: 'Page';
  contentSections?: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  metadata: ComponentMetaMetadata;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shortName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageContentSectionsDynamicZone =
  | ComponentSectionsBottomActions
  | ComponentSectionsFeatureColumnsGroup
  | ComponentSectionsFeatureRowsGroup
  | ComponentSectionsHero
  | ComponentSectionsLargeVideo
  | ComponentSectionsLeadForm
  | ComponentSectionsPricing
  | ComponentSectionsRichText
  | ComponentSectionsTestimonialsGroup
  | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  metadata?: InputMaybe<ComponentMetaMetadataFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortName?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  contentSections?: InputMaybe<
    Array<Scalars['PageContentSectionsDynamicZoneInput']>
  >;
  metadata?: InputMaybe<ComponentMetaMetadataInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  shortName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  achievement?: Maybe<AchievementEntityResponse>;
  achievements?: Maybe<AchievementEntityResponseCollection>;
  attendance?: Maybe<AttendanceEntityResponse>;
  attendances?: Maybe<AttendanceEntityResponseCollection>;
  codacOverflow?: Maybe<CodacOverflowEntityResponse>;
  codacOverflows?: Maybe<CodacOverflowEntityResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  cohorts?: Maybe<CohortEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  emailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>;
  emailDesignerEmailTemplates?: Maybe<EmailDesignerEmailTemplateEntityResponseCollection>;
  holiday?: Maybe<HolidayEntityResponse>;
  holidays?: Maybe<HolidayEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  jobPost?: Maybe<JobPostEntityResponse>;
  jobPosts?: Maybe<JobPostEntityResponseCollection>;
  lead?: Maybe<LeadEntityResponse>;
  leads?: Maybe<LeadEntityResponseCollection>;
  lmsFeedback?: Maybe<LmsFeedbackEntityResponse>;
  lmsFeedbacks?: Maybe<LmsFeedbackEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  mentor?: Maybe<MentorEntityResponse>;
  mentors?: Maybe<MentorEntityResponseCollection>;
  newsPost?: Maybe<NewsPostEntityResponse>;
  newsPosts?: Maybe<NewsPostEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  spike?: Maybe<SpikeEntityResponse>;
  spikes?: Maybe<SpikeEntityResponseCollection>;
  student?: Maybe<StudentEntityResponse>;
  students?: Maybe<StudentEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vsBattle?: Maybe<VsBattleEntityResponse>;
  vsBattles?: Maybe<VsBattleEntityResponseCollection>;
};

export type QueryAchievementArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryAchievementsArgs = {
  filters?: InputMaybe<AchievementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryAttendanceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryAttendancesArgs = {
  filters?: InputMaybe<AttendanceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCohortArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryCohortsArgs = {
  filters?: InputMaybe<CohortFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCommentsCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryCommentsCommentReportArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryCommentsCommentReportsArgs = {
  filters?: InputMaybe<CommentsCommentReportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCommentsCommentsArgs = {
  filters?: InputMaybe<CommentsCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryEmailDesignerEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryEmailDesignerEmailTemplatesArgs = {
  filters?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryHolidayArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryHolidaysArgs = {
  filters?: InputMaybe<HolidayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryJobPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryJobPostsArgs = {
  filters?: InputMaybe<JobPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryLeadsArgs = {
  filters?: InputMaybe<LeadFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryMentorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryMentorsArgs = {
  filters?: InputMaybe<MentorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryStudentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryVsBattleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryVsBattlesArgs = {
  filters?: InputMaybe<VsBattleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  SID?: Maybe<Scalars['String']>;
  achievements?: Maybe<AchievementRelationResponseCollection>;
  attendance?: Maybe<AttendanceEntityResponse>;
  avatar?: Maybe<UploadFileEntityResponse>;
  cohort?: Maybe<CohortEntityResponse>;
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['Date']>;
  firstname?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  job_center?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  main_course?: Maybe<CourseEntityResponse>;
  start_date?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type StudentCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudentEntity = {
  __typename?: 'StudentEntity';
  attributes?: Maybe<Student>;
  id?: Maybe<Scalars['ID']>;
};

export type StudentEntityResponse = {
  __typename?: 'StudentEntityResponse';
  data?: Maybe<StudentEntity>;
};

export type StudentEntityResponseCollection = {
  __typename?: 'StudentEntityResponseCollection';
  data: Array<StudentEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentFiltersInput = {
  SID?: InputMaybe<StringFilterInput>;
  achievements?: InputMaybe<AchievementFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  attendance?: InputMaybe<AttendanceFiltersInput>;
  cohort?: InputMaybe<CohortFiltersInput>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  end_date?: InputMaybe<DateFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  github?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  job_center?: InputMaybe<BooleanFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  main_course?: InputMaybe<CourseFiltersInput>;
  not?: InputMaybe<StudentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  start_date?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type StudentInput = {
  SID?: InputMaybe<Scalars['String']>;
  achievements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  attendance?: InputMaybe<Scalars['ID']>;
  avatar?: InputMaybe<Scalars['ID']>;
  cohort?: InputMaybe<Scalars['ID']>;
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  end_date?: InputMaybe<Scalars['Date']>;
  firstname?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  job_center?: InputMaybe<Scalars['Boolean']>;
  lastname?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  main_course?: InputMaybe<Scalars['ID']>;
  start_date?: InputMaybe<Scalars['Date']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type StudentRelationResponseCollection = {
  __typename?: 'StudentRelationResponseCollection';
  data: Array<StudentEntity>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  eqi?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UserData = {
  __typename?: 'UserData';
  avatar?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastname?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  userData?: Maybe<UserData>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  mentor?: Maybe<MentorEntityResponse>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  student?: Maybe<StudentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mentor?: InputMaybe<MentorFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  student?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  mentor?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  student?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VsBattle = {
  __typename?: 'VsBattle';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  option1?: Maybe<Scalars['String']>;
  option2?: Maybe<Scalars['String']>;
  option_1_voters?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  option_2_voters?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VsBattleOption_1_VotersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VsBattleOption_2_VotersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VsBattleEntity = {
  __typename?: 'VsBattleEntity';
  attributes?: Maybe<VsBattle>;
  id?: Maybe<Scalars['ID']>;
};

export type VsBattleEntityResponse = {
  __typename?: 'VsBattleEntityResponse';
  data?: Maybe<VsBattleEntity>;
};

export type VsBattleEntityResponseCollection = {
  __typename?: 'VsBattleEntityResponseCollection';
  data: Array<VsBattleEntity>;
  meta: ResponseCollectionMeta;
};

export type VsBattleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VsBattleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VsBattleFiltersInput>;
  option1?: InputMaybe<StringFilterInput>;
  option2?: InputMaybe<StringFilterInput>;
  option_1_voters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  option_2_voters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VsBattleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VsBattleInput = {
  description?: InputMaybe<Scalars['String']>;
  option1?: InputMaybe<Scalars['String']>;
  option2?: InputMaybe<Scalars['String']>;
  option_1_voters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  option_2_voters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};
