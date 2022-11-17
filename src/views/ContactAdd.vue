<template>
    <div class="page">
        <h4>Thêm liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="onUpdateContact" />
        <h4>{{ message }}</h4>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import { contactService } from "@/services/contact.service";
export default {
    components: {
        ContactForm,
    },
    props: {
        contactId: { type: Number, required: false },
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        async onUpdateContact(contact) {
            try {
                await contactService.create(contact);
                this.message = "Thêm liên hệ thành công";
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.contact = {
            name: "",
            email: "",
            address: "",
            phone: "",
            favorite: "",
        };
        this.message = "";
    },
};
</script>