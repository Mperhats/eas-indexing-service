import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSchemaArgs } from "./args/AggregateSchemaArgs";
import { Schema } from "../../../models/Schema";
import { AggregateSchema } from "../../outputs/AggregateSchema";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schema)
export class AggregateSchemaResolver {
  @TypeGraphQL.Query(_returns => AggregateSchema, {
    nullable: false
  })
  async aggregateSchema(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSchemaArgs): Promise<AggregateSchema> {
    return getPrismaFromContext(ctx).schema.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
