import { redirect } from "next/navigation";

export default function InsulinCheckRedirect() {
  redirect("/tools/blood-sugar");
}
