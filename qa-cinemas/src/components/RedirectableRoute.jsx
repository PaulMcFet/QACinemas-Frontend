function RedirectableRoute({ predicate, isTrue, isFalse }) {

    if (predicate) {
        return isTrue;
    }
    return isFalse;
}

export default RedirectableRoute;