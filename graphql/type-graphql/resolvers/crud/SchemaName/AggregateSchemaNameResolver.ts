import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSchemaNameArgs } from "./args/AggregateSchemaNameArgs";
import { SchemaName } from "../../../models/SchemaName";
import { AggregateSchemaName } from "../../outputs/AggregateSchemaName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class AggregateSchemaNameResolver {
  @TypeGraphQL.Query(_returns => AggregateSchemaName, {
    nullable: false
  })
  async aggregateSchemaName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSchemaNameArgs): Promise<AggregateSchemaName> {
    return getPrismaFromContext(ctx).schemaName.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
