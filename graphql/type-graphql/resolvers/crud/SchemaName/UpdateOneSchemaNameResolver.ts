import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSchemaNameArgs } from "./args/UpdateOneSchemaNameArgs";
import { SchemaName } from "../../../models/SchemaName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class UpdateOneSchemaNameResolver {
  @TypeGraphQL.Mutation(_returns => SchemaName, {
    nullable: true
  })
  async updateOneSchemaName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSchemaNameArgs): Promise<SchemaName | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schemaName.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
