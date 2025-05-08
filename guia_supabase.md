# Guía: Verificar Usuarios en el Dashboard de Supabase

## 1. Cómo acceder a la sección de autenticación en Supabase

1. **Inicia sesión en tu cuenta de Supabase** en [https://app.supabase.com](https://app.supabase.com)
2. Selecciona el proyecto que estás utilizando para Andalucía Activa
3. En el menú lateral izquierdo, busca y haz clic en **Authentication**
4. Por defecto, deberías ver la pestaña **Users** seleccionada

## 2. Dónde encontrar los usuarios registrados

Una vez en la sección de Authentication:

1. En la pestaña **Users**, verás una tabla con todos los usuarios registrados
2. Esta tabla muestra información como:
   - Email
   - Provider (método de autenticación)
   - Created At (fecha y hora de creación)
   - Last Sign In (última vez que inició sesión)
   - Status (confirmado, no confirmado, etc.)

Si tienes usuarios registrados, deberían aparecer en esta lista. Si la lista está vacía, podría significar que no hay usuarios registrados o que hay algún problema con el registro.

## 3. Posibles razones por las que los usuarios no aparecen

Hay varias razones por las que podrías no estar viendo usuarios en el dashboard:

1. **Los usuarios no se han registrado correctamente**:
   - Errores en la función de registro
   - Problemas con la configuración de Supabase

2. **Estás mirando en el proyecto equivocado**:
   - Asegúrate de que estás en el proyecto correcto en Supabase
   - Verifica que las credenciales en tu archivo .env coincidan con el proyecto que estás revisando

3. **Problemas con la confirmación de correo electrónico**:
   - Si tienes habilitada la confirmación de correo, los usuarios podrían aparecer como "no confirmados"
   - Revisa la configuración de Email en Authentication > Email Templates

4. **Filtros aplicados en la interfaz**:
   - Comprueba si hay filtros aplicados en la tabla de usuarios
   - Asegúrate de que no estás filtrando por estado (ej., solo mostrando usuarios confirmados)

5. **Caché del navegador**:
   - A veces el dashboard puede no mostrar la información más reciente debido al caché
   - Intenta recargar la página o borrar la caché

## 4. Cómo verificar si el registro está funcionando correctamente

Para verificar si el registro está funcionando:

1. **Revisa los logs de la aplicación**:
   - En el dashboard de Supabase, ve a Database > Logs
   - También puedes agregar console.log en tus funciones de registro para depurar

2. **Verifica la respuesta de las funciones de registro**:
   - Agrega console.log para mostrar la respuesta completa de las funciones signUp y signIn
   - Ejemplo: `console.log("Respuesta de signUp:", result);`

3. **Prueba el registro manualmente**:
   - Ve a Authentication > Users > Add User en Supabase
   - Agrega un usuario manualmente y verifica si aparece

4. **Comprueba la configuración de autenticación**:
   - En el dashboard, ve a Authentication > Settings
   - Verifica que el Email Auth esté habilitado
   - Comprueba los ajustes de confirmación de correo

5. **Inspecciona las solicitudes de red**:
   - Utiliza las herramientas de desarrollo del navegador (F12) > pestaña Network
   - Busca solicitudes a Supabase y verifica las respuestas

## 5. Soluciones a problemas comunes

### Usuarios no aparecen después del registro

1. **Verifica las credenciales de Supabase**:
   ```javascript
   // Comprueba que estas credenciales sean correctas en .env
   NEXT_PUBLIC_SUPABASE_URL=https://jjlbqwmnnyginlvxcyfc.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

2. **Modifica la función de registro para mostrar más información**:
   ```javascript
   export async function signUp(email, password) {
     try {
       console.log('Intentando registrar usuario:', email);
       const { data, error } = await supabase.auth.signUp({
         email,
         password,
       });
       
       console.log('Respuesta de registro:', { data, error });
       
       if (error) {
         console.error('Error de registro:', error);
         return { success: false, error: error.message };
       }
       
       return { success: true, data };
     } catch (error) {
       console.error('Error inesperado:', error);
       return { success: false, error: error.message };
     }
   }
   ```

3. **Habilitar/deshabilitar confirmación por correo**:
   - Ve a Authentication > Settings
   - Ajusta "Confirm email" según tus necesidades
   - Si lo deshabilitas, los usuarios se confirmarán automáticamente

4. **Problema con los permisos de Row Level Security (RLS)**:
   - Si tienes tablas personalizadas para usuarios, verifica la configuración RLS
   - Asegúrate de que las políticas permitan las operaciones necesarias

5. **Reinicia el servidor de desarrollo**:
   - A veces, reiniciar el servidor puede resolver problemas de caché o estado
   ```
   CTRL+C para detener el servidor
   npm run dev para iniciarlo de nuevo
   ```

6. **Verifica la configuración del cliente Supabase**:
   ```javascript
   // lib/supabase.ts
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

   if (!supabaseUrl || !supabaseAnonKey) {
     throw new Error('Supabase URL and Anon Key must be defined in .env');
   }

   export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   ```

### Problemas de autenticación después del registro

1. **Verifica la sesión del usuario**:
   ```javascript
   const checkSession = async () => {
     const { data } = await supabase.auth.getSession();
     console.log('Sesión actual:', data.session);
   };
   ```

2. **Limpia el almacenamiento local**:
   - A veces, los tokens almacenados pueden causar problemas
   - Borra el localStorage y sessionStorage del navegador

3. **Configura correctamente los redirecciones**:
   - Asegúrate de que las redirecciones después del login/registro son correctas
   - Verifica los eventos de onAuthStateChange

---

Recuerda que Supabase a veces puede tener cierto retraso en mostrar usuarios nuevos en el dashboard. Si has verificado que el registro funciona correctamente (recibes respuestas exitosas) pero los usuarios no aparecen inmediatamente, es posible que solo necesites esperar unos minutos para que se actualice la interfaz.

