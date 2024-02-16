import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneOffchainRevocationArgs } from "./args/CreateOneOffchainRevocationArgs";
import { OffchainRevocation } from "../../../models/OffchainRevocation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OffchainRevocation)
export class CreateOneOffchainRevocationResolver {
  @TypeGraphQL.Mutation(_returns => OffchainRevocation, {
    nullable: false
  })
  async createOneOffchainRevocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneOffchainRevocationArgs): Promise<OffchainRevocation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).offchainRevocation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
