import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySchemaNameArgs } from "./args/GroupBySchemaNameArgs";
import { SchemaName } from "../../../models/SchemaName";
import { SchemaNameGroupBy } from "../../outputs/SchemaNameGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SchemaName)
export class GroupBySchemaNameResolver {
  @TypeGraphQL.Query(_returns => [SchemaNameGroupBy], {
    nullable: false
  })
  async groupBySchemaName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySchemaNameArgs): Promise<SchemaNameGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schemaName.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
