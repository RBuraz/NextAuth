import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) =>{
    try {
        const user = await db.user.findMany({where: {email}})
    } catch  {
        return null;
    }
}

export const getUserById = async (id: string) =>{
    try {
        const user = await db.user.findMany({where: {id}})
    } catch  {
        return null;
    }
}