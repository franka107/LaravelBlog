<template>
    <div>
        <div class="content">
            <div class="container-fluid">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div
                    class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
                >
                  <p class="_title0">Tags <Button @click="addModal=true"><Icon type="md-add-circle"/>Añadir Tag</Button></p>

                    <div class="_overflow _table_div">
                        <table class="_table">
                            <!-- TABLE TITLE -->
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Fecha de creación</th>
                                <th>Actualizado por ultima vez</th>
                                <th>Acciones</th>
                            </tr>
                            <!-- TABLE TITLE -->

                            <!-- ITEMS -->
                            <tr v-for="tag in tags" v-show="tags.length" :key="tag.id">
                                <td>{{tag.id}}</td>
                                <td class="_table_name">{{tag.tagName}}</td>
                                <td>{{tag.created_at}}</td>
                                <td>{{tag.updated_at}}</td>
                                <td>
                                    <Button type="info" size="small">Editar</Button>
                                    <Button type="error" size="small">Eliminar</Button>
                                </td>
                            </tr>
                            <!-- ITEMS -->
                        </table>
                    </div>
                </div>
                <Page :total="100" />

                <!-- Tag adding modal-->
                <Modal
                  v-model="addModal"
                  title="Añadir tag"
                  :mask-closable="false"
                  :closable = "false"
                >
                  <Input v-model="data.tagName" placeholder="Ingresa el nombre del tag" style="width: 300px"/> 
                  <div slot="footer">
                    <Button type="default" @click="addModal = false">Cerrar</Button>
                    <Button type="primary" @click="addTag" :disabled="isAdding" :loading="isAdding">{{ isAdding ? 'Adding..' : 'Añadir Tag'}}</Button>
                  </div>
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      data: {
        tagName: ''
      },
      addModal : false,
      isAdding : false,
      tags: []
    }
  },
  methods:{
    async addTag(){
      if(this.data.tagName.trim() == '') return this.e('El nombre del tag es requerido.')
      const res = await this.callApi('post', 'app/create_tag', this.data)
      if(res.status === 201) {
        this.s('El tag fue añadido exitosamente')
        this.addModal = false
      } else {
        this.swr()
      }
    }
  },
  async created(){
    let res = await this.callApi('get', 'app/get_tags')
    
		if(res.status==200){
			this.tags = res.data
		}else{
			this.swr()
		}
	},
}
</script>
