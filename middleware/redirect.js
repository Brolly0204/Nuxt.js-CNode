export default function(context) {
  const { route, redirect } = context
  if (route.path === '/') {
    redirect('/articles/all')
  }
}
