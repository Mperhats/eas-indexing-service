import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSchemaNameArgs } from "./args/UpsertOneSchemaNameArgs";
import { SchemaName } from "../../../models/SchemaName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class UpsertOneSchemaNameResolver {
  @TypeGraphQL.Mutation(_returns => SchemaName, {
    nullable: false
  })
  async upsertOneSchemaName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSchemaNameArgs): Promise<SchemaName> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schemaName.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
