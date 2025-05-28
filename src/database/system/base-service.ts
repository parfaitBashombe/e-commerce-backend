import prisma from "@src/database/system/db";
import { Page, Pagination } from "@src/types/db";
import Util from "@src/core/utils";

const { Password } = Util;

abstract class BaseService {
  protected database = prisma;
  protected Password = Password;

  protected readonly PAGE_SIZE = 10;

  constructor() {}

  protected abstract transaction(data?: any): Promise<null | any>;

  public async call(data?: any): Promise<null | any> {
    try {
      return await this.transaction(data);
    } catch (error) {
      return null;
    }
  }

  protected cursor(data: Page): Pagination {
    const skip = (data.page - 1) * data.pageSize;
    const take = data.pageSize;
    return { take, skip };
  }
}

export default BaseService;
