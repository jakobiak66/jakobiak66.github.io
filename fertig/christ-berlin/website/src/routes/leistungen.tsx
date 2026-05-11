export default function LeistungenLayout() {
  const location = useLocation();

  if (location.pathname.replace(/\/$/, "") === "/leistungen") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
