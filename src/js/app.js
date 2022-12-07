if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    })
}

import "/src/css/app.css"
