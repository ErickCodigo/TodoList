<script>
    import Panel from "./components/Panel.svelte";

    let todoList = ["Bienvenido compañero(a)", "¡Hazme click para editar!", "Si te crees invencible bórrame de este listado."];
</script>

<main class="container">
    <div>
        <h1 class="container__title">Lista de todos</h1>

        <Panel {todoList}/>
    </div>
</main>

<svelte:head>
    <style>
        * {
            box-sizing: border-box;
            user-select: none;
        }

        body {
            overflow: hidden;
        }
    </style>
</svelte:head>

<style>
    .container {
        background-color: red;
        border-radius: 4px;
    }

    .container__title {
        text-align: center;
    }
</style>
