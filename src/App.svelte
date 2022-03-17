<script>
  import { getPillsStatus } from "./app";
  import { pillsData, initialState } from "./stores";

  const dateThatTookPills = localStorage.getItem("timeThatITook");

  getPillsStatus(dateThatTookPills);
</script>

<main class={$pillsData.status}>
  <p>{$pillsData.message}</p>
  {#if $pillsData.status !== "ok"}
    <button
      class="pillBtn"
      on:click={() => {
        $pillsData = {
          hadTookThePills: true,
          status: "ok",
          message: "Take deep breath you already took your pills today",
        };
        localStorage.setItem("timeThatITook", new Date());
      }}>I just took!</button
    >
  {/if}
  {#if $pillsData.status === "ok"}
    <button
      class="resetBtn"
      on:click={() => {
        if (
          confirm(
            "Are you sure that you want to remove the last time you took your pills?"
          )
        ) {
          $pillsData = initialState;
          localStorage.removeItem("timeThatITook");
        }
      }}>Reset the data</button
    >
  {/if}
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }

  p {
    text-align: center;
    padding: 0 16px;
  }

  .pillBtn {
    border-radius: 50px;
    width: 80px;
    height: 80px;
    border: none;
    background-color: #e03846;
    color: #fff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }

  .resetBtn {
    border-radius: 4px;
    padding: 8px;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }

  .danger {
    background-color: #f8d7d9;
    color: #721c23;
  }

  .alert {
    background-color: #fff2cd;
    color: #856305;
  }

  .ok {
    background-color: #cce5ff;
    color: #0b4689;
  }
</style>
