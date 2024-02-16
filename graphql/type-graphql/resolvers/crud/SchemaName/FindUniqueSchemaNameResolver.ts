import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSchemaNameArgs } from "./args/FindUniqueSchemaNameArgs";
import { SchemaName } from "../../../models/SchemaName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class FindUniqueSchemaNameResolver {
  @TypeGraphQL.Query(_returns => SchemaName, {
    nullable: true
  })
  async schemaName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSchemaNameArgs): Promise<SchemaName | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schemaName.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
