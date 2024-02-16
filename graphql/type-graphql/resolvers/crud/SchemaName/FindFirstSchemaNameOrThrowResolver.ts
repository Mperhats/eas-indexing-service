import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSchemaNameOrThrowArgs } from "./args/FindFirstSchemaNameOrThrowArgs";
import { SchemaName } from "../../../models/SchemaName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class FindFirstSchemaNameOrThrowResolver {
  @TypeGraphQL.Query(_returns => SchemaName, {
    nullable: true
  })
  async findFirstSchemaNameOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSchemaNameOrThrowArgs): Promise<SchemaName | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schemaName.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
