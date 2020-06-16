export default function({ store, error, redirect }) {
    // If the user is not authenticated
    if (!store.$auth.loggedIn) {
        return redirect('/login')
    } else if (!store.state.authUser) {
        error({
            message: 'You are not connected',
            statusCode: 403
        })
    }
}
