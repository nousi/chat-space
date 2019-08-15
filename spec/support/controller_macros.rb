module ControllerMacros
  def login(user)
    @request.env["divise.mapping"] = Devise.mappings[:user]
    sign_in user
  end
end
