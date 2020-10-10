<script>
import CustomForm from './Form.vue'
import FormField from './FormField.vue'

export default {
  components: { CustomForm, FormField },
  data() {
    return {
      errors: {
        user: 'Username is required.',
      },
    }
  },
}
</script>

<template>
  <CustomForm :errors="errors">
    <div>
      <FormField name="user">
        <label>
          Username <br />
          <input type="text" autocomplete="username" />
        </label>
      </FormField>

      <!-- ... -->
    </div>
  </CustomForm>
</template>
