import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Schema: crudResolvers.SchemaCrudResolver,
  Attestation: crudResolvers.AttestationCrudResolver,
  SchemaName: crudResolvers.SchemaNameCrudResolver,
  Timestamp: crudResolvers.TimestampCrudResolver,
  OffchainRevocation: crudResolvers.OffchainRevocationCrudResolver,
  EnsName: crudResolvers.EnsNameCrudResolver,
  ServiceStat: crudResolvers.ServiceStatCrudResolver
};
const actionResolversMap = {
  Schema: {
    aggregateSchema: actionResolvers.AggregateSchemaResolver,
    createManySchema: actionResolvers.CreateManySchemaResolver,
    createOneSchema: actionResolvers.CreateOneSchemaResolver,
    deleteManySchema: actionResolvers.DeleteManySchemaResolver,
    deleteOneSchema: actionResolvers.DeleteOneSchemaResolver,
    findFirstSchema: actionResolvers.FindFirstSchemaResolver,
    findFirstSchemaOrThrow: actionResolvers.FindFirstSchemaOrThrowResolver,
    schemata: actionResolvers.FindManySchemaResolver,
    schema: actionResolvers.FindUniqueSchemaResolver,
    getSchema: actionResolvers.FindUniqueSchemaOrThrowResolver,
    groupBySchema: actionResolvers.GroupBySchemaResolver,
    updateManySchema: actionResolvers.UpdateManySchemaResolver,
    updateOneSchema: actionResolvers.UpdateOneSchemaResolver,
    upsertOneSchema: actionResolvers.UpsertOneSchemaResolver
  },
  Attestation: {
    aggregateAttestation: actionResolvers.AggregateAttestationResolver,
    createManyAttestation: actionResolvers.CreateManyAttestationResolver,
    createOneAttestation: actionResolvers.CreateOneAttestationResolver,
    deleteManyAttestation: actionResolvers.DeleteManyAttestationResolver,
    deleteOneAttestation: actionResolvers.DeleteOneAttestationResolver,
    findFirstAttestation: actionResolvers.FindFirstAttestationResolver,
    findFirstAttestationOrThrow: actionResolvers.FindFirstAttestationOrThrowResolver,
    attestations: actionResolvers.FindManyAttestationResolver,
    attestation: actionResolvers.FindUniqueAttestationResolver,
    getAttestation: actionResolvers.FindUniqueAttestationOrThrowResolver,
    groupByAttestation: actionResolvers.GroupByAttestationResolver,
    updateManyAttestation: actionResolvers.UpdateManyAttestationResolver,
    updateOneAttestation: actionResolvers.UpdateOneAttestationResolver,
    upsertOneAttestation: actionResolvers.UpsertOneAttestationResolver
  },
  SchemaName: {
    aggregateSchemaName: actionResolvers.AggregateSchemaNameResolver,
    createManySchemaName: actionResolvers.CreateManySchemaNameResolver,
    createOneSchemaName: actionResolvers.CreateOneSchemaNameResolver,
    deleteManySchemaName: actionResolvers.DeleteManySchemaNameResolver,
    deleteOneSchemaName: actionResolvers.DeleteOneSchemaNameResolver,
    findFirstSchemaName: actionResolvers.FindFirstSchemaNameResolver,
    findFirstSchemaNameOrThrow: actionResolvers.FindFirstSchemaNameOrThrowResolver,
    schemaNames: actionResolvers.FindManySchemaNameResolver,
    schemaName: actionResolvers.FindUniqueSchemaNameResolver,
    getSchemaName: actionResolvers.FindUniqueSchemaNameOrThrowResolver,
    groupBySchemaName: actionResolvers.GroupBySchemaNameResolver,
    updateManySchemaName: actionResolvers.UpdateManySchemaNameResolver,
    updateOneSchemaName: actionResolvers.UpdateOneSchemaNameResolver,
    upsertOneSchemaName: actionResolvers.UpsertOneSchemaNameResolver
  },
  Timestamp: {
    aggregateTimestamp: actionResolvers.AggregateTimestampResolver,
    createManyTimestamp: actionResolvers.CreateManyTimestampResolver,
    createOneTimestamp: actionResolvers.CreateOneTimestampResolver,
    deleteManyTimestamp: actionResolvers.DeleteManyTimestampResolver,
    deleteOneTimestamp: actionResolvers.DeleteOneTimestampResolver,
    findFirstTimestamp: actionResolvers.FindFirstTimestampResolver,
    findFirstTimestampOrThrow: actionResolvers.FindFirstTimestampOrThrowResolver,
    timestamps: actionResolvers.FindManyTimestampResolver,
    timestamp: actionResolvers.FindUniqueTimestampResolver,
    getTimestamp: actionResolvers.FindUniqueTimestampOrThrowResolver,
    groupByTimestamp: actionResolvers.GroupByTimestampResolver,
    updateManyTimestamp: actionResolvers.UpdateManyTimestampResolver,
    updateOneTimestamp: actionResolvers.UpdateOneTimestampResolver,
    upsertOneTimestamp: actionResolvers.UpsertOneTimestampResolver
  },
  OffchainRevocation: {
    aggregateOffchainRevocation: actionResolvers.AggregateOffchainRevocationResolver,
    createManyOffchainRevocation: actionResolvers.CreateManyOffchainRevocationResolver,
    createOneOffchainRevocation: actionResolvers.CreateOneOffchainRevocationResolver,
    deleteManyOffchainRevocation: actionResolvers.DeleteManyOffchainRevocationResolver,
    deleteOneOffchainRevocation: actionResolvers.DeleteOneOffchainRevocationResolver,
    findFirstOffchainRevocation: actionResolvers.FindFirstOffchainRevocationResolver,
    findFirstOffchainRevocationOrThrow: actionResolvers.FindFirstOffchainRevocationOrThrowResolver,
    offchainRevocations: actionResolvers.FindManyOffchainRevocationResolver,
    offchainRevocation: actionResolvers.FindUniqueOffchainRevocationResolver,
    getOffchainRevocation: actionResolvers.FindUniqueOffchainRevocationOrThrowResolver,
    groupByOffchainRevocation: actionResolvers.GroupByOffchainRevocationResolver,
    updateManyOffchainRevocation: actionResolvers.UpdateManyOffchainRevocationResolver,
    updateOneOffchainRevocation: actionResolvers.UpdateOneOffchainRevocationResolver,
    upsertOneOffchainRevocation: actionResolvers.UpsertOneOffchainRevocationResolver
  },
  EnsName: {
    aggregateEnsName: actionResolvers.AggregateEnsNameResolver,
    createManyEnsName: actionResolvers.CreateManyEnsNameResolver,
    createOneEnsName: actionResolvers.CreateOneEnsNameResolver,
    deleteManyEnsName: actionResolvers.DeleteManyEnsNameResolver,
    deleteOneEnsName: actionResolvers.DeleteOneEnsNameResolver,
    findFirstEnsName: actionResolvers.FindFirstEnsNameResolver,
    findFirstEnsNameOrThrow: actionResolvers.FindFirstEnsNameOrThrowResolver,
    ensNames: actionResolvers.FindManyEnsNameResolver,
    ensName: actionResolvers.FindUniqueEnsNameResolver,
    getEnsName: actionResolvers.FindUniqueEnsNameOrThrowResolver,
    groupByEnsName: actionResolvers.GroupByEnsNameResolver,
    updateManyEnsName: actionResolvers.UpdateManyEnsNameResolver,
    updateOneEnsName: actionResolvers.UpdateOneEnsNameResolver,
    upsertOneEnsName: actionResolvers.UpsertOneEnsNameResolver
  },
  ServiceStat: {
    aggregateServiceStat: actionResolvers.AggregateServiceStatResolver,
    createManyServiceStat: actionResolvers.CreateManyServiceStatResolver,
    createOneServiceStat: actionResolvers.CreateOneServiceStatResolver,
    deleteManyServiceStat: actionResolvers.DeleteManyServiceStatResolver,
    deleteOneServiceStat: actionResolvers.DeleteOneServiceStatResolver,
    findFirstServiceStat: actionResolvers.FindFirstServiceStatResolver,
    findFirstServiceStatOrThrow: actionResolvers.FindFirstServiceStatOrThrowResolver,
    serviceStats: actionResolvers.FindManyServiceStatResolver,
    serviceStat: actionResolvers.FindUniqueServiceStatResolver,
    getServiceStat: actionResolvers.FindUniqueServiceStatOrThrowResolver,
    groupByServiceStat: actionResolvers.GroupByServiceStatResolver,
    updateManyServiceStat: actionResolvers.UpdateManyServiceStatResolver,
    updateOneServiceStat: actionResolvers.UpdateOneServiceStatResolver,
    upsertOneServiceStat: actionResolvers.UpsertOneServiceStatResolver
  }
};
const crudResolversInfo = {
  Schema: ["aggregateSchema", "createManySchema", "createOneSchema", "deleteManySchema", "deleteOneSchema", "findFirstSchema", "findFirstSchemaOrThrow", "schemata", "schema", "getSchema", "groupBySchema", "updateManySchema", "updateOneSchema", "upsertOneSchema"],
  Attestation: ["aggregateAttestation", "createManyAttestation", "createOneAttestation", "deleteManyAttestation", "deleteOneAttestation", "findFirstAttestation", "findFirstAttestationOrThrow", "attestations", "attestation", "getAttestation", "groupByAttestation", "updateManyAttestation", "updateOneAttestation", "upsertOneAttestation"],
  SchemaName: ["aggregateSchemaName", "createManySchemaName", "createOneSchemaName", "deleteManySchemaName", "deleteOneSchemaName", "findFirstSchemaName", "findFirstSchemaNameOrThrow", "schemaNames", "schemaName", "getSchemaName", "groupBySchemaName", "updateManySchemaName", "updateOneSchemaName", "upsertOneSchemaName"],
  Timestamp: ["aggregateTimestamp", "createManyTimestamp", "createOneTimestamp", "deleteManyTimestamp", "deleteOneTimestamp", "findFirstTimestamp", "findFirstTimestampOrThrow", "timestamps", "timestamp", "getTimestamp", "groupByTimestamp", "updateManyTimestamp", "updateOneTimestamp", "upsertOneTimestamp"],
  OffchainRevocation: ["aggregateOffchainRevocation", "createManyOffchainRevocation", "createOneOffchainRevocation", "deleteManyOffchainRevocation", "deleteOneOffchainRevocation", "findFirstOffchainRevocation", "findFirstOffchainRevocationOrThrow", "offchainRevocations", "offchainRevocation", "getOffchainRevocation", "groupByOffchainRevocation", "updateManyOffchainRevocation", "updateOneOffchainRevocation", "upsertOneOffchainRevocation"],
  EnsName: ["aggregateEnsName", "createManyEnsName", "createOneEnsName", "deleteManyEnsName", "deleteOneEnsName", "findFirstEnsName", "findFirstEnsNameOrThrow", "ensNames", "ensName", "getEnsName", "groupByEnsName", "updateManyEnsName", "updateOneEnsName", "upsertOneEnsName"],
  ServiceStat: ["aggregateServiceStat", "createManyServiceStat", "createOneServiceStat", "deleteManyServiceStat", "deleteOneServiceStat", "findFirstServiceStat", "findFirstServiceStatOrThrow", "serviceStats", "serviceStat", "getServiceStat", "groupByServiceStat", "updateManyServiceStat", "updateOneServiceStat", "upsertOneServiceStat"]
};
const argsInfo = {
  AggregateSchemaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySchemaArgs: ["data", "skipDuplicates"],
  CreateOneSchemaArgs: ["data"],
  DeleteManySchemaArgs: ["where"],
  DeleteOneSchemaArgs: ["where"],
  FindFirstSchemaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSchemaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySchemaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSchemaArgs: ["where"],
  FindUniqueSchemaOrThrowArgs: ["where"],
  GroupBySchemaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySchemaArgs: ["data", "where"],
  UpdateOneSchemaArgs: ["data", "where"],
  UpsertOneSchemaArgs: ["where", "create", "update"],
  AggregateAttestationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAttestationArgs: ["data", "skipDuplicates"],
  CreateOneAttestationArgs: ["data"],
  DeleteManyAttestationArgs: ["where"],
  DeleteOneAttestationArgs: ["where"],
  FindFirstAttestationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAttestationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttestationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAttestationArgs: ["where"],
  FindUniqueAttestationOrThrowArgs: ["where"],
  GroupByAttestationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAttestationArgs: ["data", "where"],
  UpdateOneAttestationArgs: ["data", "where"],
  UpsertOneAttestationArgs: ["where", "create", "update"],
  AggregateSchemaNameArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySchemaNameArgs: ["data", "skipDuplicates"],
  CreateOneSchemaNameArgs: ["data"],
  DeleteManySchemaNameArgs: ["where"],
  DeleteOneSchemaNameArgs: ["where"],
  FindFirstSchemaNameArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSchemaNameOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySchemaNameArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSchemaNameArgs: ["where"],
  FindUniqueSchemaNameOrThrowArgs: ["where"],
  GroupBySchemaNameArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySchemaNameArgs: ["data", "where"],
  UpdateOneSchemaNameArgs: ["data", "where"],
  UpsertOneSchemaNameArgs: ["where", "create", "update"],
  AggregateTimestampArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTimestampArgs: ["data", "skipDuplicates"],
  CreateOneTimestampArgs: ["data"],
  DeleteManyTimestampArgs: ["where"],
  DeleteOneTimestampArgs: ["where"],
  FindFirstTimestampArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTimestampOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTimestampArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTimestampArgs: ["where"],
  FindUniqueTimestampOrThrowArgs: ["where"],
  GroupByTimestampArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTimestampArgs: ["data", "where"],
  UpdateOneTimestampArgs: ["data", "where"],
  UpsertOneTimestampArgs: ["where", "create", "update"],
  AggregateOffchainRevocationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOffchainRevocationArgs: ["data", "skipDuplicates"],
  CreateOneOffchainRevocationArgs: ["data"],
  DeleteManyOffchainRevocationArgs: ["where"],
  DeleteOneOffchainRevocationArgs: ["where"],
  FindFirstOffchainRevocationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOffchainRevocationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOffchainRevocationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOffchainRevocationArgs: ["where"],
  FindUniqueOffchainRevocationOrThrowArgs: ["where"],
  GroupByOffchainRevocationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOffchainRevocationArgs: ["data", "where"],
  UpdateOneOffchainRevocationArgs: ["data", "where"],
  UpsertOneOffchainRevocationArgs: ["where", "create", "update"],
  AggregateEnsNameArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEnsNameArgs: ["data", "skipDuplicates"],
  CreateOneEnsNameArgs: ["data"],
  DeleteManyEnsNameArgs: ["where"],
  DeleteOneEnsNameArgs: ["where"],
  FindFirstEnsNameArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEnsNameOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEnsNameArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEnsNameArgs: ["where"],
  FindUniqueEnsNameOrThrowArgs: ["where"],
  GroupByEnsNameArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEnsNameArgs: ["data", "where"],
  UpdateOneEnsNameArgs: ["data", "where"],
  UpsertOneEnsNameArgs: ["where", "create", "update"],
  AggregateServiceStatArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyServiceStatArgs: ["data", "skipDuplicates"],
  CreateOneServiceStatArgs: ["data"],
  DeleteManyServiceStatArgs: ["where"],
  DeleteOneServiceStatArgs: ["where"],
  FindFirstServiceStatArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstServiceStatOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyServiceStatArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueServiceStatArgs: ["where"],
  FindUniqueServiceStatOrThrowArgs: ["where"],
  GroupByServiceStatArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyServiceStatArgs: ["data", "where"],
  UpdateOneServiceStatArgs: ["data", "where"],
  UpsertOneServiceStatArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Schema: relationResolvers.SchemaRelationsResolver,
  Attestation: relationResolvers.AttestationRelationsResolver,
  SchemaName: relationResolvers.SchemaNameRelationsResolver
};
const relationResolversInfo = {
  Schema: ["attestations", "schemaNames"],
  Attestation: ["schema"],
  SchemaName: ["schema"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Schema: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  Attestation: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  SchemaName: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  Timestamp: ["id", "from", "txid", "tree", "timestamp"],
  OffchainRevocation: ["id", "from", "uid", "txid", "timestamp"],
  EnsName: ["id", "name", "timestamp"],
  ServiceStat: ["name", "value"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateSchema: ["_count", "_avg", "_sum", "_min", "_max"],
  SchemaGroupBy: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAttestation: ["_count", "_avg", "_sum", "_min", "_max"],
  AttestationGroupBy: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSchemaName: ["_count", "_avg", "_sum", "_min", "_max"],
  SchemaNameGroupBy: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTimestamp: ["_count", "_avg", "_sum", "_min", "_max"],
  TimestampGroupBy: ["id", "from", "txid", "tree", "timestamp", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOffchainRevocation: ["_count", "_avg", "_sum", "_min", "_max"],
  OffchainRevocationGroupBy: ["id", "from", "uid", "txid", "timestamp", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEnsName: ["_count", "_avg", "_sum", "_min", "_max"],
  EnsNameGroupBy: ["id", "name", "timestamp", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateServiceStat: ["_count", "_min", "_max"],
  ServiceStatGroupBy: ["name", "value", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  SchemaCount: ["attestations", "schemaNames"],
  SchemaCountAggregate: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "_all"],
  SchemaAvgAggregate: ["time"],
  SchemaSumAggregate: ["time"],
  SchemaMinAggregate: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  SchemaMaxAggregate: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  AttestationCountAggregate: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain", "_all"],
  AttestationAvgAggregate: ["time", "timeCreated", "expirationTime", "revocationTime"],
  AttestationSumAggregate: ["time", "timeCreated", "expirationTime", "revocationTime"],
  AttestationMinAggregate: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  AttestationMaxAggregate: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  SchemaNameCountAggregate: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator", "_all"],
  SchemaNameAvgAggregate: ["time"],
  SchemaNameSumAggregate: ["time"],
  SchemaNameMinAggregate: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  SchemaNameMaxAggregate: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  TimestampCountAggregate: ["id", "from", "txid", "tree", "timestamp", "_all"],
  TimestampAvgAggregate: ["timestamp"],
  TimestampSumAggregate: ["timestamp"],
  TimestampMinAggregate: ["id", "from", "txid", "tree", "timestamp"],
  TimestampMaxAggregate: ["id", "from", "txid", "tree", "timestamp"],
  OffchainRevocationCountAggregate: ["id", "from", "uid", "txid", "timestamp", "_all"],
  OffchainRevocationAvgAggregate: ["timestamp"],
  OffchainRevocationSumAggregate: ["timestamp"],
  OffchainRevocationMinAggregate: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationMaxAggregate: ["id", "from", "uid", "txid", "timestamp"],
  EnsNameCountAggregate: ["id", "name", "timestamp", "_all"],
  EnsNameAvgAggregate: ["timestamp"],
  EnsNameSumAggregate: ["timestamp"],
  EnsNameMinAggregate: ["id", "name", "timestamp"],
  EnsNameMaxAggregate: ["id", "name", "timestamp"],
  ServiceStatCountAggregate: ["name", "value", "_all"],
  ServiceStatMinAggregate: ["name", "value"],
  ServiceStatMaxAggregate: ["name", "value"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  SchemaWhereInput: ["AND", "OR", "NOT", "id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "attestations", "schemaNames"],
  SchemaOrderByWithRelationInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "attestations", "schemaNames"],
  SchemaWhereUniqueInput: ["id"],
  SchemaOrderByWithAggregationInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "_count", "_avg", "_max", "_min", "_sum"],
  SchemaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  AttestationWhereInput: ["AND", "OR", "NOT", "id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain", "schema"],
  AttestationOrderByWithRelationInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain", "schema"],
  AttestationWhereUniqueInput: ["id"],
  AttestationOrderByWithAggregationInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain", "_count", "_avg", "_max", "_min", "_sum"],
  AttestationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  SchemaNameWhereInput: ["AND", "OR", "NOT", "id", "schemaId", "attesterAddress", "name", "time", "isCreator", "schema"],
  SchemaNameOrderByWithRelationInput: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator", "schema"],
  SchemaNameWhereUniqueInput: ["id"],
  SchemaNameOrderByWithAggregationInput: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator", "_count", "_avg", "_max", "_min", "_sum"],
  SchemaNameScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  TimestampWhereInput: ["AND", "OR", "NOT", "id", "from", "txid", "tree", "timestamp"],
  TimestampOrderByWithRelationInput: ["id", "from", "txid", "tree", "timestamp"],
  TimestampWhereUniqueInput: ["id"],
  TimestampOrderByWithAggregationInput: ["id", "from", "txid", "tree", "timestamp", "_count", "_avg", "_max", "_min", "_sum"],
  TimestampScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "from", "txid", "tree", "timestamp"],
  OffchainRevocationWhereInput: ["AND", "OR", "NOT", "id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationOrderByWithRelationInput: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationWhereUniqueInput: ["id"],
  OffchainRevocationOrderByWithAggregationInput: ["id", "from", "uid", "txid", "timestamp", "_count", "_avg", "_max", "_min", "_sum"],
  OffchainRevocationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "from", "uid", "txid", "timestamp"],
  EnsNameWhereInput: ["AND", "OR", "NOT", "id", "name", "timestamp"],
  EnsNameOrderByWithRelationInput: ["id", "name", "timestamp"],
  EnsNameWhereUniqueInput: ["id"],
  EnsNameOrderByWithAggregationInput: ["id", "name", "timestamp", "_count", "_avg", "_max", "_min", "_sum"],
  EnsNameScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "timestamp"],
  ServiceStatWhereInput: ["AND", "OR", "NOT", "name", "value"],
  ServiceStatOrderByWithRelationInput: ["name", "value"],
  ServiceStatWhereUniqueInput: ["name"],
  ServiceStatOrderByWithAggregationInput: ["name", "value", "_count", "_max", "_min"],
  ServiceStatScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "name", "value"],
  SchemaCreateInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "attestations", "schemaNames"],
  SchemaUpdateInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "attestations", "schemaNames"],
  SchemaCreateManyInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  SchemaUpdateManyMutationInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  AttestationCreateInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "ipfsHash", "isOffchain", "schema"],
  AttestationUpdateInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "ipfsHash", "isOffchain", "schema"],
  AttestationCreateManyInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  AttestationUpdateManyMutationInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "ipfsHash", "isOffchain"],
  SchemaNameCreateInput: ["id", "attesterAddress", "name", "time", "isCreator", "schema"],
  SchemaNameUpdateInput: ["id", "attesterAddress", "name", "time", "isCreator", "schema"],
  SchemaNameCreateManyInput: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  SchemaNameUpdateManyMutationInput: ["id", "attesterAddress", "name", "time", "isCreator"],
  TimestampCreateInput: ["id", "from", "txid", "tree", "timestamp"],
  TimestampUpdateInput: ["id", "from", "txid", "tree", "timestamp"],
  TimestampCreateManyInput: ["id", "from", "txid", "tree", "timestamp"],
  TimestampUpdateManyMutationInput: ["id", "from", "txid", "tree", "timestamp"],
  OffchainRevocationCreateInput: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationUpdateInput: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationCreateManyInput: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationUpdateManyMutationInput: ["id", "from", "uid", "txid", "timestamp"],
  EnsNameCreateInput: ["id", "name", "timestamp"],
  EnsNameUpdateInput: ["id", "name", "timestamp"],
  EnsNameCreateManyInput: ["id", "name", "timestamp"],
  EnsNameUpdateManyMutationInput: ["id", "name", "timestamp"],
  ServiceStatCreateInput: ["name", "value"],
  ServiceStatUpdateInput: ["name", "value"],
  ServiceStatCreateManyInput: ["name", "value"],
  ServiceStatUpdateManyMutationInput: ["name", "value"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AttestationListRelationFilter: ["every", "some", "none"],
  SchemaNameListRelationFilter: ["every", "some", "none"],
  AttestationOrderByRelationAggregateInput: ["_count"],
  SchemaNameOrderByRelationAggregateInput: ["_count"],
  SchemaCountOrderByAggregateInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  SchemaAvgOrderByAggregateInput: ["time"],
  SchemaMaxOrderByAggregateInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  SchemaMinOrderByAggregateInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time"],
  SchemaSumOrderByAggregateInput: ["time"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  SchemaRelationFilter: ["is", "isNot"],
  AttestationCountOrderByAggregateInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  AttestationAvgOrderByAggregateInput: ["time", "timeCreated", "expirationTime", "revocationTime"],
  AttestationMaxOrderByAggregateInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  AttestationMinOrderByAggregateInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  AttestationSumOrderByAggregateInput: ["time", "timeCreated", "expirationTime", "revocationTime"],
  SchemaNameCountOrderByAggregateInput: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  SchemaNameAvgOrderByAggregateInput: ["time"],
  SchemaNameMaxOrderByAggregateInput: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  SchemaNameMinOrderByAggregateInput: ["id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  SchemaNameSumOrderByAggregateInput: ["time"],
  TimestampCountOrderByAggregateInput: ["id", "from", "txid", "tree", "timestamp"],
  TimestampAvgOrderByAggregateInput: ["timestamp"],
  TimestampMaxOrderByAggregateInput: ["id", "from", "txid", "tree", "timestamp"],
  TimestampMinOrderByAggregateInput: ["id", "from", "txid", "tree", "timestamp"],
  TimestampSumOrderByAggregateInput: ["timestamp"],
  OffchainRevocationCountOrderByAggregateInput: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationAvgOrderByAggregateInput: ["timestamp"],
  OffchainRevocationMaxOrderByAggregateInput: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationMinOrderByAggregateInput: ["id", "from", "uid", "txid", "timestamp"],
  OffchainRevocationSumOrderByAggregateInput: ["timestamp"],
  EnsNameCountOrderByAggregateInput: ["id", "name", "timestamp"],
  EnsNameAvgOrderByAggregateInput: ["timestamp"],
  EnsNameMaxOrderByAggregateInput: ["id", "name", "timestamp"],
  EnsNameMinOrderByAggregateInput: ["id", "name", "timestamp"],
  EnsNameSumOrderByAggregateInput: ["timestamp"],
  ServiceStatCountOrderByAggregateInput: ["name", "value"],
  ServiceStatMaxOrderByAggregateInput: ["name", "value"],
  ServiceStatMinOrderByAggregateInput: ["name", "value"],
  AttestationCreateNestedManyWithoutSchemaInput: ["create", "connectOrCreate", "createMany", "connect"],
  SchemaNameCreateNestedManyWithoutSchemaInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  AttestationUpdateManyWithoutSchemaNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SchemaNameUpdateManyWithoutSchemaNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SchemaCreateNestedOneWithoutAttestationsInput: ["create", "connectOrCreate", "connect"],
  SchemaUpdateOneRequiredWithoutAttestationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SchemaCreateNestedOneWithoutSchemaNamesInput: ["create", "connectOrCreate", "connect"],
  SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AttestationCreateWithoutSchemaInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "ipfsHash", "isOffchain"],
  AttestationCreateOrConnectWithoutSchemaInput: ["where", "create"],
  AttestationCreateManySchemaInputEnvelope: ["data", "skipDuplicates"],
  SchemaNameCreateWithoutSchemaInput: ["id", "attesterAddress", "name", "time", "isCreator"],
  SchemaNameCreateOrConnectWithoutSchemaInput: ["where", "create"],
  SchemaNameCreateManySchemaInputEnvelope: ["data", "skipDuplicates"],
  AttestationUpsertWithWhereUniqueWithoutSchemaInput: ["where", "update", "create"],
  AttestationUpdateWithWhereUniqueWithoutSchemaInput: ["where", "data"],
  AttestationUpdateManyWithWhereWithoutSchemaInput: ["where", "data"],
  AttestationScalarWhereInput: ["AND", "OR", "NOT", "id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "schemaId", "ipfsHash", "isOffchain"],
  SchemaNameUpsertWithWhereUniqueWithoutSchemaInput: ["where", "update", "create"],
  SchemaNameUpdateWithWhereUniqueWithoutSchemaInput: ["where", "data"],
  SchemaNameUpdateManyWithWhereWithoutSchemaInput: ["where", "data"],
  SchemaNameScalarWhereInput: ["AND", "OR", "NOT", "id", "schemaId", "attesterAddress", "name", "time", "isCreator"],
  SchemaCreateWithoutAttestationsInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "schemaNames"],
  SchemaCreateOrConnectWithoutAttestationsInput: ["where", "create"],
  SchemaUpsertWithoutAttestationsInput: ["update", "create"],
  SchemaUpdateWithoutAttestationsInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "schemaNames"],
  SchemaCreateWithoutSchemaNamesInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "attestations"],
  SchemaCreateOrConnectWithoutSchemaNamesInput: ["where", "create"],
  SchemaUpsertWithoutSchemaNamesInput: ["update", "create"],
  SchemaUpdateWithoutSchemaNamesInput: ["id", "schema", "creator", "resolver", "revocable", "index", "txid", "time", "attestations"],
  AttestationCreateManySchemaInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "ipfsHash", "isOffchain"],
  SchemaNameCreateManySchemaInput: ["id", "attesterAddress", "name", "time", "isCreator"],
  AttestationUpdateWithoutSchemaInput: ["id", "data", "decodedDataJson", "recipient", "attester", "time", "timeCreated", "expirationTime", "revocationTime", "refUID", "revocable", "revoked", "txid", "ipfsHash", "isOffchain"],
  SchemaNameUpdateWithoutSchemaInput: ["id", "attesterAddress", "name", "time", "isCreator"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

