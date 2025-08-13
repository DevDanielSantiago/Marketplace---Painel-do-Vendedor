import { typography } from "../../styles/typography";

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          {/* Title Large - DM Sans */}
          <h1 className={typography.title.large}>Marketplace</h1>

          {/* Title Medium - DM Sans */}
          <h2 className={typography.title.medium}>Painel de Vendedor</h2>

          {/* Body Medium - Poppins */}
          <p className={typography.body.medium}>
            Faça login para acessar seu painel de vendas
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className={`${typography.label.medium} block mb-2`}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`${typography.body.medium} appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-200 text-gray-500 focus:outline-none focus:ring-blue-base focus:border-blue-base focus:z-10`}
              placeholder="Digite seu email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className={`${typography.label.medium} block mb-2`}
            >
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={`${typography.body.medium} appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-200 text-gray-500 focus:outline-none focus:ring-blue-base focus:border-blue-base focus:z-10`}
              placeholder="Digite sua senha"
            />
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-base focus:ring-blue-base border-gray-200 rounded"
              />
              <label
                htmlFor="remember-me"
                className={`${typography.body.small} ml-2`}
              >
                Lembrar de mim
              </label>
            </div>

            <div>
              <a
                href="#"
                className={`${typography.body.small} text-blue-base hover:text-blue-dark`}
              >
                Esqueceu a senha?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`${typography.action.medium} group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-white bg-blue-base hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-base transition-colors`}
            >
              Entrar
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className={typography.body.small}>
              Não tem uma conta?{" "}
              <a
                href="/register"
                className={`${typography.action.small} text-blue-base hover:text-blue-dark`}
              >
                Cadastre-se aqui
              </a>
            </p>
          </div>
        </form>

        {/* Typography Test Section - Remove after testing */}
        <div className="mt-8 pt-6 border-t border-shape space-y-3">
          <p className={`${typography.body.xs} text-gray-300 text-center`}>
            Teste de Tipografia:
          </p>

          {/* DM Sans Tests */}
          <div className="space-y-2">
            <p className={typography.title.small}>Title Small - DM Sans</p>
            <p className={typography.subtitle}>Subtitle - Poppins</p>
            <p className={typography.body.xs}>Body XS - Poppins</p>
            <p className={typography.label.small}>Label Small - Poppins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
