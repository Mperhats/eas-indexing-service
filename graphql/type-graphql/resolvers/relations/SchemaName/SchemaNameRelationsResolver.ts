import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Schema } from "../../../models/Schema";
import { SchemaName } from "../../../models/SchemaName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class SchemaNameRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Schema, {
    nullable: false
  })
  async schema(@TypeGraphQL.Root() schemaName: SchemaName, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Schema> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schemaName.findUniqueOrThrow({
      where: {
        id: schemaName.id,
      },
    }).schema({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
