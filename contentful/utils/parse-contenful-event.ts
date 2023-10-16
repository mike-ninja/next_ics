import { parseContentfulConferences } from ".";
import { EventEntry, EventType } from "../types/types";
import coverImageParse from "./cover-image-parse";

export default function parseContentfulEvent(
  eventEntry: EventEntry,
): EventType | null {
  if (!eventEntry) {
    return null;
  }

  const coverImage = coverImageParse({
    coverImage: eventEntry.fields.coverImage,
  });

  return {
    title: eventEntry.fields.title,
    description: eventEntry.fields.description,
    content: eventEntry.fields.content,
    slug: eventEntry.fields.slug,
    tags: eventEntry.fields.tags,
    coverImage: coverImage,
    // media: conferenceEntry.fields.media,
  };
}
