import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"],
});

import express from "express";
export const router = express.Router();

export type TransactionPrismaClient = Omit<
  PrismaClient<
    {
      log: "query"[];
    },
    never,
    false
  >,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
>;
