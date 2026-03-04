import { getAllMenusAction, getAvailableSortOrdersAction, getMenuByIdAction } from "@/actions/menu-action";
import { notFound } from "next/navigation";
import AdminMenuDetailPageContentContainer from "./admin-menu-detail-page-content-container/admin-menu-detail-page-content-container";

interface AdminMenuDetailPageContentProps {
  params: Promise<{ id: string }>;
}

export default async function AdminMenuDetailPageContent({
  params
}: AdminMenuDetailPageContentProps) {
  const { id } = await params;

  const [currentMenuResponse, menusResponse] = await Promise.all([
    getMenuByIdAction(id),
    getAllMenusAction(),
  ]);
  const availableSortOrdersResponse = await getAvailableSortOrdersAction(currentMenuResponse.data?.parent?.id || '');

  if (!currentMenuResponse.success || !currentMenuResponse.data) {
    notFound();
  }

  return (
    <AdminMenuDetailPageContentContainer
      currentMenu={currentMenuResponse.data}
      menusData={menusResponse.data ?? []}
      availableSortOrdersData={availableSortOrdersResponse.data ?? []}
    />
  );
}
