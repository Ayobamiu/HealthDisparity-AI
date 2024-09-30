import { ResponseFormatJSONSchema } from "openai/resources";
import { z } from "zod";

export type HealthCategory = {
  category: string;
  message: string;
  color: string;
  actionableRecommendations: string[];
  "Link to reliable resources": string[];
};

export interface Address {
  country_code: string;
  country_name: string;
  address_purpose: string;
  address_type: string;
  address_1: string;
  city: string;
  state: string;
  postal_code: string;
  telephone_number: string;
  fax_number?: string; // Optional because not all addresses have a fax number
}

export interface PracticeLocation extends Address {}

export interface BasicInfoNPI2 {
  status: string;
  last_updated: string;
  enumeration_date: string;
  organization_name: string;
  organizational_subpart: string;
  certification_date: string;
  authorized_official_first_name: string;
  authorized_official_last_name: string;
  authorized_official_telephone_number: string;
  authorized_official_title_or_position: string;
  authorized_official_name_prefix: string;
}
export interface BasicInfoNPI1 {
  first_name: string;
  last_name: string;
  middle_name: string;
  credential: string;
  sole_proprietor: string;
  gender: string;
  name_prefix: string;
  name_suffix: string;
  status: string;
  last_updated: string;
  enumeration_date: string;
}

export interface Taxonomy {
  code: string;
  taxonomy_group: string;
  desc: string;
  state: string;
  license: string;
  primary: boolean;
}

export interface Identifier {
  code: string;
  desc: string;
  issuer: string | null;
  identifier: string;
  state: string;
}

export interface Endpoint {
  endpointType: string;
  endpointTypeDescription: string;
  endpoint: string;
  endpointDescription: string;
  affiliation: string;
  affiliationName: string;
  use: string;
  useDescription: string;
  contentType: string;
  contentTypeDescription: string;
  contentOtherDescription: string;
  country_code: string;
  country_name: string;
  address_type: string;
  address_1: string;
  city: string;
  state: string;
  postal_code: string;
}

export interface OtherName {
  type: string;
  code: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  prefix: string;
}

export interface Provider {
  created_epoch: string;
  enumeration_type: string;
  last_updated_epoch: string;
  number: string;
  addresses: Address[];
  practiceLocations: PracticeLocation[];
  basic: BasicInfoNPI1 | BasicInfoNPI2;
  taxonomies: Taxonomy[];
  identifiers: Identifier[];
  endpoints: Endpoint[];
  other_names: OtherName[];
}

export type UserData = {
  age: string;
  gender: string;
  state: string;
  city: string;
  ethnicity: string;
  bloodPressure: string;
  glucose: string;
  bmi: string;
};
export type SearchData = {
  search_city: string;
  search_state: string;
  search_postalCode: string;
  search_taxonomy: string;
};
export type UserInput = {
  state: string;
  city: string;
  employmentStatus: string;
  incomeLevel: string;
  foodAccess: boolean;
  transportation: boolean;
  housingAccess: boolean;
  educationAccess: boolean;
  healthcareAccess: boolean;
  socialSupport: boolean;
  safetyInNeighborhood: boolean;
  digitalAccess: boolean;
};

export enum ThreadEnum {
  GENERAL = "General Health Advice",
  DISPARITY = "HealthDisparity",
  PROVIDER = "HealthcareProvider",
  DETERMINANTS = "HealthTrackingandSocialDeterminants",
}

export type ThreadData = {
  email: string;
  threads: { [index: string]: string };
};
export type MetricData = {
  explanation: string;
  comparison: string;
  recommendation: string;
  visualIndicators: string;
  primaryColor: string;
  secondaryColor: string;
  userValue: number;
  nationalAverage: number;
  category: string;
};
interface ResourceData {
  title: string;
  url: string;
}
export type HealthData = {
  bloodPressure: MetricData;
  glucose: MetricData;
  bmi: MetricData;
  additionalResources: ResourceData[];
};
export type ResourceLink = {
  title: string;
  url: string;
};

export type AccessRecommendation = {
  suggestion: string;
  resourceLinks: ResourceLink[];
};

export type AccessTrends = {
  past6Months: {
    [month: string]: number; // Dynamic month keys with numeric values
  };
  averageTrend: string;
};

export type Determinants = {
  foodAccess?: AccessRecommendation;
  housingAccess?: AccessRecommendation;
  employmentSupport?: AccessRecommendation;
  transportation?: AccessRecommendation;
  healthcareAccess?: AccessRecommendation;
  educationAccess?: AccessRecommendation;
  socialSupport?: AccessRecommendation;
  safetyInNeighborhood?: AccessRecommendation;
  digitalAccess?: AccessRecommendation;
};
export type DeterminantsTrends = {
  foodAccess?: AccessTrends;
  housingAccess?: AccessTrends;
  employmentSupport?: AccessTrends;
  transportation?: AccessTrends;
  healthcareAccess?: AccessTrends;
  educationAccess?: AccessTrends;
  socialSupport?: AccessTrends;
  safetyInNeighborhood?: AccessTrends;
  digitalAccess?: AccessTrends;
};

export type RecommendationsAndTrends = {
  recommendations: Determinants;
  trends: DeterminantsTrends;
};

const ResourceLinkSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});

const AccessRecommendationSchema = z
  .object({
    suggestion: z.string(),
    resourceLinks: z.array(ResourceLinkSchema),
  })
  .nullable();

const AccessTrendsSchema = z
  .object({
    past6Months: z.object({
      January: z.number(),
      February: z.number(),
      March: z.number(),
      April: z.number(),
      May: z.number(),
      June: z.number(),
    }),
    averageTrend: z.string(),
  })
  .nullable();

export const RecommendationsAndTrendsSchema = z.object({
  recommendations: z
    .object({
      foodAccess: AccessRecommendationSchema.optional(),
      housingAccess: AccessRecommendationSchema.optional(),
      employmentSupport: AccessRecommendationSchema.optional(),
      transportation: AccessRecommendationSchema.optional(),
      healthcareAccess: AccessRecommendationSchema.optional(),
      educationAccess: AccessRecommendationSchema.optional(),
      socialSupport: AccessRecommendationSchema.optional(),
      safetyInNeighborhood: AccessRecommendationSchema.optional(),
      digitalAccess: AccessRecommendationSchema.optional(),
    })
    .partial(),

  trends: z
    .object({
      foodAccess: AccessTrendsSchema.optional(),
      housingAccess: AccessTrendsSchema.optional(),
      employmentSupport: AccessTrendsSchema.optional(),
      transportation: AccessTrendsSchema.optional(),
      healthcareAccess: AccessTrendsSchema.optional(),
      educationAccess: AccessTrendsSchema.optional(),
      socialSupport: AccessTrendsSchema.optional(),
      safetyInNeighborhood: AccessTrendsSchema.optional(),
      digitalAccess: AccessTrendsSchema.optional(),
    })
    .partial(),
});

export const recommendationsAndTrendsResponseFormat: ResponseFormatJSONSchema =
  {
    type: "json_schema",
    json_schema: {
      name: "recommendation_response",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        title: "RecommendationsAndTrends",
        type: "object",
        properties: {
          recommendations: {
            type: "object",
            properties: {
              foodAccess: {
                $ref: "#/definitions/AccessRecommendation",
              },
              housingAccess: {
                $ref: "#/definitions/AccessRecommendation",
              },
              employmentSupport: {
                $ref: "#/definitions/AccessRecommendation",
              },
              transportation: {
                $ref: "#/definitions/AccessRecommendation",
              },
              healthcareAccess: {
                $ref: "#/definitions/AccessRecommendation",
              },
              educationAccess: {
                $ref: "#/definitions/AccessRecommendation",
              },
              socialSupport: {
                $ref: "#/definitions/AccessRecommendation",
              },
              safetyInNeighborhood: {
                $ref: "#/definitions/AccessRecommendation",
              },
              digitalAccess: {
                $ref: "#/definitions/AccessRecommendation",
              },
            },
            additionalProperties: false,
          },
          trends: {
            type: "object",
            properties: {
              foodAccess: {
                $ref: "#/definitions/AccessTrends",
              },
              housingAccess: {
                $ref: "#/definitions/AccessTrends",
              },
              employmentSupport: {
                $ref: "#/definitions/AccessTrends",
              },
              transportation: {
                $ref: "#/definitions/AccessTrends",
              },
              healthcareAccess: {
                $ref: "#/definitions/AccessTrends",
              },
              educationAccess: {
                $ref: "#/definitions/AccessTrends",
              },
              socialSupport: {
                $ref: "#/definitions/AccessTrends",
              },
              safetyInNeighborhood: {
                $ref: "#/definitions/AccessTrends",
              },
              digitalAccess: {
                $ref: "#/definitions/AccessTrends",
              },
            },
            additionalProperties: false,
          },
        },
        required: ["recommendations", "trends"],
        definitions: {
          ResourceLink: {
            type: "object",
            properties: {
              title: {
                type: "string",
              },
              url: {
                type: "string",
                format: "uri",
              },
            },
            required: ["title", "url"],
          },
          AccessRecommendation: {
            type: "object",
            properties: {
              suggestion: {
                type: "string",
              },
              resourceLinks: {
                type: "array",
                items: {
                  $ref: "#/definitions/ResourceLink",
                },
              },
            },
            required: ["suggestion", "resourceLinks"],
          },
          AccessTrends: {
            type: "object",
            properties: {
              past6Months: {
                type: "object",
                properties: {
                  January: {
                    type: "number",
                  },
                  February: {
                    type: "number",
                  },
                  March: {
                    type: "number",
                  },
                  April: {
                    type: "number",
                  },
                  May: {
                    type: "number",
                  },
                  June: {
                    type: "number",
                  },
                },
                required: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                ],
              },
              averageTrend: {
                type: "string",
              },
            },
            required: ["past6Months", "averageTrend"],
          },
        },
      },
    },
  };
export const disparityResponseFormat: ResponseFormatJSONSchema = {
  type: "json_schema",
  json_schema: {
    name: "recommendation_response",
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        bloodPressure: {
          $ref: "#/definitions/Z_Disp",
        },
        glucose: {
          $ref: "#/definitions/Z_Disp",
        },
        bmi: {
          $ref: "#/definitions/Z_Disp",
        },
        additionalResources: {
          type: "array",
          items: {
            $ref: "#/definitions/ResourceLink",
          },
        },
      },
      required: ["bloodPressure", "glucose", "bmi", "additionalResources"],
      definitions: {
        Z_Disp: {
          type: "object",
          properties: {
            explanation: {
              type: "string",
            },
            comparison: {
              type: "string",
            },
            recommendation: {
              type: "string",
            },
            visualIndicators: {
              type: "string",
            },
            primaryColor: {
              type: "string",
              description: "This is the color that indicates the status.",
            },
            secondaryColor: {
              type: "string",
              description:
                "This is the color that complements the primaryColor.",
            },
            userValue: {
              type: "number",
            },
            nationalAverage: {
              type: "number",
            },
            category: {
              type: "string",
            },
          },
          required: [
            "explanation",
            "comparison",
            "recommendation",
            "visualIndicators",
            "primaryColor",
            "secondaryColor",
            "userValue",
            "nationalAverage",
            "category",
          ],
        },
        ResourceLink: {
          type: "object",
          properties: {
            title: {
              type: "string",
            },
            url: {
              type: "string",
              format: "uri",
            },
          },
          required: ["title", "url"],
        },
      },
    },
  },
};
