<script>
    import Card from "./Card.svelte";

    export let todoList;
    let text = "";
    let isEditing = false;
    let activeComponentIndex = null;
    let inputRef = null;

    const handleKeydown = (e) => {
        if (e.key === "Enter" && text) {

            if (isEditing) {

                const xs = [...todoList];

                xs[activeComponentIndex] = text;

                todoList = xs;
                clear();

            } else {
                todoList = [text, ...todoList];
                text = "";
            }

        }
    }

    const handleRemove = (e) => {
        const {index} = e.detail;

        todoList = todoList.filter((_, i) => i !== e.detail.index);
        if (activeComponentIndex === index) {
            clear()
        }
    }

    const clear = () => {
        isEditing = false;
        activeComponentIndex = null;
        text = "";
    }

    const handleEdit = (e) => {
        const {value, activeIndex} = e.detail;

        inputRef.focus();
        text = value;
        isEditing = true;
        activeComponentIndex = activeIndex;
    }
</script>

<div class="panel">
    <div class="panel__left">
        <h3>Ingresa un todo:</h3>
        <input
           on:keydown={handleKeydown}
           bind:value={text}
           bind:this={inputRef}
           class="text-field" type="text"
           placeholder="Ingresa un texto">

        {#if isEditing}
            <span class="info-text">
                [Estás editando]
                *Ingresa Enter para terminar de editar
            </span>
        {:else if text}
            <span class="info-text">*Ingresa Enter para añadirlo a la lista</span>
        {/if}
    </div>
    <div class="panel__right">
        <div class="list">
            {#each todoList as text, index}
                <Card on:edit={handleEdit} on:remove={handleRemove} {index} {text}/>
            {/each}

            {#if todoList.length === 0}
                <span>No hay todos por el momento.</span>
            {/if}
        </div>
    </div>
</div>

<style>
    .panel {
        --h: 60vh;
        display: flex;
        width: 100%;
        height: var(--h);
        max-height: var(--h);
        flex-wrap: wrap;
        position: relative;
    }

    .panel__left, .panel__right {
        padding: 0 1rem .5rem;
        width: 100%;
        max-height: 100%;
    }

    .text-field {
        width: 100%;
        border-radius: 4px;
    }

    .list {
        max-height: 100%;
        overflow-y: auto;
    }

    .info-text {
        font-size: .8em;
        text-align: right;
        color: gold;
    }

    @media (min-width: 700px) {
        .panel {
            justify-content: space-between;
            flex-wrap: nowrap;
        }

        .panel__left, .panel__right {
            padding: 0 1rem .5rem;
            width: 50%;
        }
    }
</style>
