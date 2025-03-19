/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import { ContentType, contentTypeSchema } from '../models/contentType';
import { ExportFormats, exportFormatsSchema } from '../models/exportFormats';
import { Transformation, transformationSchema } from '../models/transformation';
import {
  TransformViaUrlRequest,
  transformViaUrlRequestSchema,
} from '../models/transformViaUrlRequest';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class TransformationController extends BaseController {
  /**
   * Transform an API into any of the supported API specification formats by uploading the API
   * specification file.
   *
   * This endpoint transforms and then uploads the transformed API specification to APIMatic's cloud
   * storage. An ID for the transformation performed is returned as part of the response.
   *
   * @param contentType
   * @param file          The API specification file.<br>The type of the specification file should be
   *                                       any of the [supported formats](https://docs.apimatic.io/api-
   *                                       transformer/overview-transformer#supported-input-formats).
   * @param exportFormat  The structure contains API specification formats that Transformer can
   *                                       convert to.
   * @return Response from the API call
   */
  async transformViaFile(
    contentType: ContentType,
    file: FileWrapper,
    exportFormat: ExportFormats,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transformation>> {
    const req = this.createRequest(
      'POST',
      '/transformations/transform-via-file'
    );
    const mapped = req.prepareArgs({
      contentType: [contentType, contentTypeSchema],
      exportFormat: [exportFormat, exportFormatsSchema],
    });
    req.header('Content-Type', mapped.contentType);
    req.formData({ file: file, export_format: mapped.exportFormat });
    req.authenticate([{ authorization: true }]);
    return req.callAsJson(transformationSchema, requestOptions);
  }

  /**
   * Transform an API into any of the supported API specification formats by providing the URL of the API
   * specification file.
   *
   * This endpoint transforms and then uploads the transformed API specification to APIMatic's cloud
   * storage. An ID for the transformation performed is returned as part of the response.
   *
   * @param body         Request Body
   * @return Response from the API call
   */
  async transformViaURL(
    body: TransformViaUrlRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transformation>> {
    const req = this.createRequest(
      'POST',
      '/transformations/transform-via-url'
    );
    const mapped = req.prepareArgs({
      body: [body, transformViaUrlRequestSchema],
    });
    req.header(
      'Content-Type',
      'application/vnd.apimatic.urlTransformDto.v1+json'
    );
    req.json(mapped.body);
    req.authenticate([{ authorization: true }]);
    return req.callAsJson(transformationSchema, requestOptions);
  }

  /**
   * Download the transformed API specification file transformed via the Transformation endpoints.
   *
   * @param transformationId  The ID of transformation received in the response of the [Transform Via File
   *                                    ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL  ](https:
   *                                    //www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  async downloadTransformedFile(
    transformationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      transformationId: [transformationId, string()],
    });
    req.appendTemplatePath`/transformations/${mapped.transformationId}/converted-file`;
    req.authenticate([{ authorization: true }]);
    return req.callAsStream(requestOptions);
  }

  /**
   * Download the API Specification file used as input for a particular Transformation performed via the
   * Transformation endpoints.
   *
   * @param transformationId  The ID of the transformation to download the API specification for. The
   *                                    transformation ID is received in the response of the [Transform Via File
   *                                    ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL](https://www.
   *                                    apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  async downloadInputFile(
    transformationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      transformationId: [transformationId, string()],
    });
    req.appendTemplatePath`/transformations/${mapped.transformationId}/input-file`;
    req.authenticate([{ authorization: true }]);
    return req.callAsStream(requestOptions);
  }

  /**
   * Get a list of all API transformations performed.
   *
   * @return Response from the API call
   */
  async listAllTransformations(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transformation[]>> {
    const req = this.createRequest('GET', '/transformations');
    req.authenticate([{ authorization: true }]);
    return req.callAsJson(array(transformationSchema), requestOptions);
  }

  /**
   * Get details on a particular Transformation performed via the Transformation endpoints.
   *
   * @param transformationId  The ID of the transformation to fetch. The transformation ID is received in
   *                                    the response of the [Transform Via File ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL  ](https:
   *                                    //www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  async getATransformation(
    transformationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transformation>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      transformationId: [transformationId, string()],
    });
    req.appendTemplatePath`/transformations/${mapped.transformationId}`;
    req.authenticate([{ authorization: true }]);
    return req.callAsJson(transformationSchema, requestOptions);
  }

  /**
   * Delete a particular Transformation performed for an API via the Transformation endpoints.
   *
   * @param transformationId  The ID of the transformation to delete. The transformation ID is received in
   *                                    the response of the [Transform Via File ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL](https://www.
   *                                    apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  async deleteTransformation(
    transformationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      transformationId: [transformationId, string()],
    });
    req.appendTemplatePath`/transformations/${mapped.transformationId}`;
    req.authenticate([{ authorization: true }]);
    return req.call(requestOptions);
  }
}
