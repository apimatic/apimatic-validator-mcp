/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Links, linksSchema } from './links';

export interface PortalGenerationAsyncResponse {
  id: string;
  links: Links;
}

export const portalGenerationAsyncResponseSchema: Schema<PortalGenerationAsyncResponse> = object(
  { id: ['id', string()], links: ['links', lazy(() => linksSchema)] }
);
