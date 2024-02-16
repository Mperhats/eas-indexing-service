import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOffchainRevocationOrThrowArgs } from "./args/FindFirstOffchainRevocationOrThrowArgs";
import { OffchainRevocation } from "../../../models/OffchainRevocation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OffchainRevocation)
export class FindFirstOffchainRevocationOrThrowResolver {
  @TypeGraphQL.Query(_returns => OffchainRevocation, {
    nullable: true
  })
  async findFirstOffchainRevocationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOffchainRevocationOrThrowArgs): Promise<OffchainRevocation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).offchainRevocation.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
