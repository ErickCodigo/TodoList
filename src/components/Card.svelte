<script>
    import {createEventDispatcher} from "svelte";

    export let text;
    export let index;

    const dispatch = createEventDispatcher();

    const handleRemove = (e) => {
        e.stopPropagation();

        dispatch("remove", {index});
    }

    const handleEdit = () => {
        dispatch("edit", {value: text, activeIndex: index})
    }
</script>

<div class="card" on:click={handleEdit}>
    {text}

    <div on:click={handleRemove} class="card__close">
        Eliminar &#10060;
    </div>
</div>

<style>
    .card {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #cccccc;
        padding: .8rem;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;
        line-height: 1;
    }

    .card__close {
        margin-left: .5rem;
        font-size: .7em;
        white-space: nowrap;
        display: inline-block;
    }

    .card__close:hover {
        background-color: red;
    }

    .card:hover {
        background-color: #dddddd;
    }
</style>
