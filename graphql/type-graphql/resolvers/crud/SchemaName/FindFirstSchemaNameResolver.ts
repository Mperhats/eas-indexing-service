import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSchemaNameArgs } from "./args/FindFirstSchemaNameArgs";
import { SchemaName } from "../../../models/SchemaName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class FindFirstSchemaNameResolver {
  @TypeGraphQL.Query(_returns => SchemaName, {
    nullable: true
  })
  async findFirstSchemaName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSchemaNameArgs): Promise<SchemaName | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schemaName.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
