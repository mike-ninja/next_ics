import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeConferencesSkeleton } from "./TypeConferences";

export interface TypeEventFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    media?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    slug: EntryFieldTypes.Symbol;
    coverImage: EntryFieldTypes.AssetLink;
    conference: EntryFieldTypes.EntryLink<TypeConferencesSkeleton>;
    agenda?: EntryFieldTypes.Object;
}

export type TypeEventSkeleton = EntrySkeletonType<TypeEventFields, "event">;
export type TypeEvent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeEventSkeleton, Modifiers, Locales>;
