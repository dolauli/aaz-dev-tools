import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { Program, Service, TwoLevelMap, Type, TypeNameOptions } from "@typespec/compiler";
import { MetadataInfo, Visibility } from "@typespec/http";
import { PendingSchema, Ref } from "./model/schema.js";


export interface AAZEmitterContext {
    readonly program: Program;
    readonly service: Service;
    readonly sdkContext: SdkContext;
    readonly apiVersion: string;
}

export interface AAZOperationEmitterContext extends AAZEmitterContext {
    readonly operationId: string;
    // readonly mutability: Visibility.Create | Visibility.Read | Visibility.Update | Visibility.Delete;
    visibility: Visibility;
    typeNameOptions: TypeNameOptions;
    metadateInfo: MetadataInfo;
    pendingSchemas: TwoLevelMap<Type, Visibility, PendingSchema>;
    refs: TwoLevelMap<Type, Visibility, Ref>;
}

export interface AAZSchemaEmitterContext extends AAZOperationEmitterContext {
    readonly collectionFormat?: string;
    readonly supportClsSchema: boolean;
}
