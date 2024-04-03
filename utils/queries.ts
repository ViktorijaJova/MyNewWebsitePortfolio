import { gql } from "@apollo/client";
import TitleBlockQuery from "../src/blocks/TitleBlock/query";
import DescriptionBlockQuery from "@/blocks/DescriptionBlock/query";
import SubTitleBlockQuery from "@/blocks/SubTitleandTitleBlock/query";
import SubtitleTitleButtonBlockQuery from "@/blocks/SubtitleTitleButtonBlock/query";
import HomeHeroBlockQuery from "@/blocks/HomeHeroBlock/query";
import AboutUsBlockQuery from "@/blocks/AboutUsBlock/query";
import ContactBannerBlockQuery from "@/blocks/ContactUsBannerBlock/query";
import WhoWeAreBlockQuery from "@/blocks/WhoWeAreBlock/query";
import CaseStudyContactFormBlockQuery from "@/blocks/CaseStudyContactFormBlock/query";
import SpacingBlockQuery from "@/blocks/SpacingBlock/query";
import CarouselBlockQuery from "@/blocks/CarouselBlock/query";
import TestimonialsBlockQuery from "@/blocks/TestimonialsBlock/query";
import SliderOfEmployeesBlockQuery from "@/blocks/SliderEmployeesBlock/query";
import CaseStudiesBlockQuery from "@/blocks/CaseStudiesBlock/query";
import ContactUsBlockQuery from "@/blocks/ContactUsBlock/query";
import HomeAvailableResourcesBlockQuery from "@/blocks/HomeAvailableResourcesBlock/query";
import CardsGreenTitlesBlockQuery from "@/blocks/CardsGreenTitlesBlock/query";
import AllProjectsBlockQuery from "@/blocks/AllProjectsBlock/query";
import SubTitleandTitleBlock from "@/blocks/SubTitleandTitleBlock/SubTitleandTitleBlock";
import ServicesBlockQuery from "@/blocks/ServicesBlock/query";
import CenterButtonsBlockQuery from "@/blocks/CenterButtonsBlock/query";
import FilterResourcesBlockQuery from "@/blocks/FilterResourcesBlock/query";
import OurAssociatesBlockQuery from "@/blocks/OurAssociatesBlock/query";
import SliderOfProjectsBlockQuery from "@/blocks/SliderProjectsBlock/query";
import AllCaseStudiesBlockQuery from "@/blocks/AllCaseStudiesBlock/query";

export const GET_ALL_PAGES = gql`
  query GetAllPages {
    pages (sort: "createdAt:desc", pagination: { limit: 1000 }){
      data {
        id
        attributes {
          __typename
          publishedAt
          name
          parent {
            data {
              id
              attributes {
                name
                slug
                parent {
                  data {
                    id
                    attributes {
                      name
                      slug
                    }
                  }
                }
                children {
                  data {
                    id
                    attributes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
          children {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
          slug
          seo {
            id
            __typename
            metaTitle
            metaDescription
            preventIndexing
            meta {
              __typename
              name
              content
            }
          }
           footerBG
          pageBlocks {
            __typename
            ${HomeHeroBlockQuery}          
            ${CaseStudyContactFormBlockQuery}    
            ${SubtitleTitleButtonBlockQuery}
            ${SubTitleBlockQuery}
            ${AboutUsBlockQuery}
            ${ContactBannerBlockQuery}        
            ${WhoWeAreBlockQuery}       
            ${TitleBlockQuery}
            ${DescriptionBlockQuery}
            ${SpacingBlockQuery}
            ${TestimonialsBlockQuery}
            ${SliderOfEmployeesBlockQuery}
            ${CaseStudiesBlockQuery}
            ${ContactUsBlockQuery}
            ${HomeAvailableResourcesBlockQuery}
            ${CardsGreenTitlesBlockQuery}
            ${CarouselBlockQuery}
            ${ServicesBlockQuery}
            ${CenterButtonsBlockQuery}
            ${AllProjectsBlockQuery}
            ${FilterResourcesBlockQuery}
            ${OurAssociatesBlockQuery}
            ${SliderOfProjectsBlockQuery}
            ${AllCaseStudiesBlockQuery}
          }
        }
      }
    } 
  }
`;

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects(sort: "itemToShow:asc", pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          service {
            data {
              id
              attributes {
                service
              }
            }
          }
          itemToShow
          someOfOurWork {
            imageOfEmployee {
              data {
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                }
              }
            }
            youtubeLink
            nameOfEmployee
            positionOfEmployee
          }
          client {
            imageTop {
              data {
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                }
              }
            }
            cardContent
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;

export const GET_LAST_EIGHT_RESOURCE = gql`
  query GetLastEightResource {
    resources(sort: "itemToShow:asc", pagination: { limit: 8 }) {
      data {
        id
        attributes {
          resourceID
          itemToShow
          title
          tags
          location
          level
          contractDuration
          whenIsAvailable
          resume
          softwareSkills {
            id
            name
            level
          }
          project {
            id
            dateFromTo
            project
          }
          seniority_level {
            data {
              attributes {
                level
              }
            }
          }
          role {
            data {
              attributes {
                role
              }
            }
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;

export const GET_ALL_CASE_STUDIES_SLUG = gql`
  query GetSingleCaseStudiesSLUG {
    singleCaseStudies {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

export const GET_ALL_CASE_STUDIES = gql`
  query GetSingleCaseStudies {
    singleCaseStudies(sort: "itemToShow:asc") {
      data {
        id
        attributes {
          itemToShow
          name
          slug
          titles {
            id
            titleandSubTitle {
              bracketsColor
              showImage
              imageLink
              subTitle
              mainTitle
            }
          }
          Logo {
            data {
              attributes {
                name
                width
                height
                size
                url
              }
            }
          }
          logoBackgroundColor
          theClient
          theAftermath
          theClientDesc
          theChallenges
          theAftermathDesc
          theChallengesDesc
          featuredImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                hash
                url
                size
                previewUrl
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_RESOURCE = gql`
  query GetResourceById($id: ID) {
    resource(id: $id) {
      data {
        id
        attributes {
          resourceID
          title
          tags
          location
          level
          seniority_level {
            data {
              attributes {
                level
              }
            }
          }
          role {
            data {
              attributes {
                role
              }
            }
          }
          contractDuration
          whenIsAvailable
          resume
          softwareSkills {
            id
            name
            level
          }
          project {
            id
            dateFromTo
            project
            projectTitle
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;

export const GET_ALL_RESOURCE_SLUG = gql`
  query GetAllResourceSlug {
    resources(sort: "createdAt:desc", pagination: { limit: 10000 }) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export const GET_ALL_RESOURCE = gql`
  query GetAllResource {
    resources(sort: "itemToShow:asc", pagination: { limit: 100 }) {
      data {
        id
        attributes {
          resourceID
          itemToShow
          title
          tags
          location
          level
          seniority_level {
            data {
              attributes {
                level
              }
            }
          }
          role {
            data {
              attributes {
                role
              }
            }
          }
          contractDuration
          whenIsAvailable
          resume
          softwareSkills {
            id
            name
            level
          }
          project {
            id
            dateFromTo
            project
            projectTitle
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;
export const GET_ALL_SENIORITY_LEVELS = gql`
  query GetAllSeniorityLevels {
    seniorityLevels(sort: "createdAt:desc", pagination: { limit: 10 }) {
      data {
        attributes {
          level
        }
      }
    }
  }
`;

export const GET_ALL_ROLS = gql`
  query GetAllRols {
    positions(sort: "createdAt:desc", pagination: { limit: 50 }) {
      data {
        attributes {
          role
        }
      }
    }
  }
`;

export const GET_ALL_TESTIMONIALS_SLUG = gql`
  query GetTestimonialsSLUG {
    testimonials {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

export const GET_ALL_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials{
      data {
        id
        attributes {
          itemToShow
          slug
          testimonialText
          testimonialBy
          testimonialImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                hash
                url
                size
                previewUrl
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`;
