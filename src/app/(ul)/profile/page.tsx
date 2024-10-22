import { user } from "@/data/user";
import { redirect } from "next/navigation";



export default function page() {
   redirect('/' +user.slug );

   return null;
}
