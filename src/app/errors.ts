import { AuthError } from '../auth/oauth';
import { GmailApiError } from '../gmail/errors';

/** A message a person can act on, for any error the app can hit. Never "null" or "[object Object]". */
export function describeError(error: unknown, redirectUri: string): string {
  if (error instanceof AuthError) {
    switch (error.code) {
      case 'not_configured':
        return 'Add your OAuth client ID first.';
      case 'interaction_required':
        return 'Please sign in again.';
      case 'cancelled':
        return 'Sign-in was cancelled.';
      case 'access_denied':
        return 'Google blocked the sign-in. Make sure this Gmail address is listed as a test user on your OAuth consent screen.';
      case 'missing_scopes':
        return 'Google didn’t grant access to Gmail. Sign in again and tick every box on the permissions screen (or “Select all”).';
      case 'page_load_failed':
        return `Google’s sign-in page couldn’t load. Check that the client ID is a “Web application” client and that ${redirectUri} is listed exactly under Authorized redirect URIs.`;
      case 'state_mismatch':
        return 'The sign-in response didn’t match the request, so it was ignored. Please try again.';
      case 'failed':
        return /redirect_uri_mismatch/i.test(error.message)
          ? `Google rejected the redirect URI. Add ${redirectUri} exactly (including the trailing slash) under Authorized redirect URIs.`
          : `Sign-in failed: ${error.message}`;
    }
  }
  if (error instanceof GmailApiError) {
    switch (error.kind) {
      case 'insufficient_scope':
        return 'Gmail refused: a permission is missing. Sign out, sign in again and tick every permission box.';
      case 'rate_limited':
        return 'Gmail is rate-limiting requests. Wait a minute and try again.';
      case 'network':
        return error.message;
      case 'unauthorized':
        return 'Your Google session expired. Please sign in again.';
      case 'not_found':
      case 'invalid_request':
      case 'server':
      case 'invalid_response':
        return `Gmail error: ${error.message}`;
    }
  }
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === 'string' && error) return error;
  return 'Something went wrong, but the browser gave no details. Please try again.';
}
