import * as z from 'zod/mini';

// Gmail API response shapes (only the fields we request). Validated at the trust boundary.

export const profileSchema = z.object({
  emailAddress: z.string().check(z.minLength(1)),
  messagesTotal: z.optional(z.number()),
  historyId: z.string().check(z.minLength(1)),
});
export type Profile = z.infer<typeof profileSchema>;

export const messageListSchema = z.object({
  messages: z.optional(z.array(z.object({ id: z.string() }))),
  nextPageToken: z.optional(z.string()),
});

export const messageMetadataSchema = z.object({
  id: z.string(),
  internalDate: z.optional(z.string()),
  sizeEstimate: z.optional(z.number()),
  labelIds: z.optional(z.array(z.string())),
  payload: z.optional(
    z.object({ headers: z.optional(z.array(z.object({ name: z.string(), value: z.string() }))) }),
  ),
});

const historyMessage = z.object({ message: z.object({ id: z.string() }) });
const historyLabelChange = z.extend(historyMessage, { labelIds: z.optional(z.array(z.string())) });

export const historyListSchema = z.object({
  history: z.optional(
    z.array(
      z.object({
        messagesDeleted: z.optional(z.array(historyMessage)),
        labelsAdded: z.optional(z.array(historyLabelChange)),
        labelsRemoved: z.optional(z.array(historyLabelChange)),
      }),
    ),
  ),
  nextPageToken: z.optional(z.string()),
  historyId: z.optional(z.string()),
});

export const errorBodySchema = z.object({
  error: z.object({
    code: z.optional(z.number()),
    message: z.optional(z.string()),
    status: z.optional(z.string()),
    errors: z.optional(z.array(z.object({ reason: z.optional(z.string()) }))),
  }),
});

export const filterSchema = z.object({ id: z.string() });
