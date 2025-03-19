/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';
import { Platforms, platformsSchema } from './platforms';

/** The Code Generation structure encapsulates all the  the details of an SDK generation performed by a user. */
export interface UserCodeGeneration {
  /** Unique Code Generation Identifier */
  id: string;
  /** The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. */
  template: Platforms;
  /** The generated SDK */
  generatedFile: string;
  /** Generation Date and Time */
  generatedOn: string;
  /** The md5 hash of the API Description */
  hashCode: string;
  /** Generation Source */
  codeGenerationSource: string;
  /** Generation Version */
  codeGenVersion: string;
  /** Generation Status */
  success: boolean;
  /** Unique User Identifier */
  userId: string;
  /** API Specification file in a supported format */
  inputFile: string;
}

export const userCodeGenerationSchema: Schema<UserCodeGeneration> = object({
  id: ['id', string()],
  template: ['template', platformsSchema],
  generatedFile: ['generatedFile', string()],
  generatedOn: ['generatedOn', string()],
  hashCode: ['hashCode', string()],
  codeGenerationSource: ['codeGenerationSource', string()],
  codeGenVersion: ['codeGenVersion', string()],
  success: ['success', boolean()],
  userId: ['userId', string()],
  inputFile: ['inputFile', string()],
});
