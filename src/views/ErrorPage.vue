<template>
    <div class="bg">
        <div class="error-container">
            {{errorMessage}}
            <h1>{{ $route.name }}</h1>
            <a href="" class="mt-4">Go back</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Error",
}
</script>