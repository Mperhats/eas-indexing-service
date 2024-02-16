import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTimestampArgs } from "./args/CreateOneTimestampArgs";
import { Timestamp } from "../../../models/Timestamp";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timestamp)
export class CreateOneTimestampResolver {
  @TypeGraphQL.Mutation(_returns => Timestamp, {
    nullable: false
  })
  async createOneTimestamp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTimestampArgs): Promise<Timestamp> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timestamp.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
