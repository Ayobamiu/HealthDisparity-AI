import {
  ThreadEnum,
  ThreadData,
  UserData,
  HealthData,
  UserInput,
  RecommendationsAndTrends,
  SearchData,
  Provider,
} from "../../Data/types";
import axios from "axios";
import { Message, MessagesPage } from "openai/resources/beta/threads/messages";

/**
 * Step 1: Create an Assistant
 * (Skipping this now, assitant has been created manually on OpenAI dashboard)
 */

export async function CreateAssistant() {}

/* Step 2: Create a Thread
// [Changed to API]
 */

export async function checkOrCreateThread(type: ThreadEnum, email: string) {
  try {
    const response = await axios.request({
      url: "https://kaput-busy-salmonberry.glitch.me/checkOrCreateThread",
      method: "post",
      data: {
        type,
        email,
      },
    });

    return response.data as ThreadData;
  } catch (error) {
    console.error("Error checking or creating thread:", error);
    return null;
  }
}

/* Step 3: Add a Message to the Thread
 * [Changed to API]
 */
export async function addMessage(threadId: string, content: string) {
  await axios.request({
    url: "https://kaput-busy-salmonberry.glitch.me/addMessage",
    method: "post",
    data: {
      threadId,
      content,
    },
  });
}

/* Step 4: Create a Run
 * [Changed to API]
 */
export async function createRun(
  threadId: string,
  assistantId: string,
  instructions?: string
) {
  let response = await axios.request({
    url: "https://kaput-busy-salmonberry.glitch.me/createRun",
    method: "post",
    data: {
      threadId,
      assistantId,
      instructions,
    },
  });

  if (response) {
    return response.data as MessagesPage;
  } else {
    return null;
  }
}

// [Changed to API]
export async function getExistingMessages(threadId: string) {
  // Fetch messages from the thread without creating a new run
  const response = await axios.request({
    url: `https://kaput-busy-salmonberry.glitch.me/getExistingMessages/${threadId}`,
    method: "get",
  });

  if (response.data) {
    return response.data as Message[];
  }

  return null; // Return null if no messages exist
}

// [Changed to API]
export async function getHealthInsights(data: UserData) {
  let response = await axios.request({
    url: "https://kaput-busy-salmonberry.glitch.me/getHealthInsights",
    method: "post",
    data,
  });
  return response ? (response.data as HealthData) : null;
}

// [Changed to API]
export async function getResourcesRecommendations(data: UserInput) {
  let response = await axios.request({
    url: "https://kaput-busy-salmonberry.glitch.me/getResourcesRecommendations",
    method: "post",
    data,
  });

  return response ? (response.data as RecommendationsAndTrends) : null;
}

export async function handleSearchHeathCare(data: SearchData) {
  try {
    const response = await axios.request({
      url: "api/",
      method: "get",
      params: {
        city: data.search_city,
        state: data.search_state,
        postal_code: data.search_postalCode,
        taxonomy_description: data.search_taxonomy,
        version: "2.1",
      },
    });

    return response.data.results as Provider[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
