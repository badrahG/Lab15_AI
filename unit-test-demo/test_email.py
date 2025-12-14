import pytest

def is_valid_email(email):
    """
    Validate email address with improved logic
    
    Rules:
    - Must contain exactly one @ symbol
    - Must have username before @
    - Must have domain after @
    - Cannot end with @test.com
    - Cannot contain whitespace
    """
    # Check for whitespace
    if ' ' in email or '\t' in email or '\n' in email:
        return False
    
    # Check if @ exists
    if "@" not in email:
        return False
    
    # Check for exactly one @
    if email.count("@") != 1:
        return False
    
    # Split by @
    parts = email.split("@")
    username = parts[0]
    domain = parts[1]
    
    # Check if username and domain are not empty
    if not username or not domain:
        return False
    
    # Check if ends with @test.com
    if email.endswith("@test.com"):
        return False
    
    return True


class TestIsValidEmail:
    """Test suite for is_valid_email function"""
    
    # Positive Test Cases
    def test_valid_email_basic(self):
        """Test with standard valid email"""
        assert is_valid_email("user@example.com") == True
    
    def test_valid_email_with_subdomain(self):
        """Test with subdomain"""
        assert is_valid_email("user@mail.example.com") == True
    
    def test_valid_email_with_numbers(self):
        """Test with numbers in email"""
        assert is_valid_email("user123@example.com") == True
    
    def test_valid_email_with_dots(self):
        """Test with dots in username"""
        assert is_valid_email("first.last@example.com") == True
    
    def test_valid_email_with_plus(self):
        """Test with plus sign (email aliasing)"""
        assert is_valid_email("user+tag@example.com") == True
    
    # Negative Test Cases
    def test_invalid_email_no_at_symbol(self):
        """Test email without @ symbol"""
        assert is_valid_email("userexample.com") == False
    
    def test_invalid_email_test_domain(self):
        """Test email ending with @test.com"""
        assert is_valid_email("user@test.com") == False
    
    def test_invalid_email_only_username(self):
        """Test with only username, no domain"""
        assert is_valid_email("username") == False
    
    def test_invalid_email_multiple_at(self):
        """Test with multiple @ symbols"""
        assert is_valid_email("user@@example.com") == False
    
    # Edge Cases
    def test_edge_case_empty_string(self):
        """Test with empty string"""
        assert is_valid_email("") == False
    
    def test_edge_case_only_at_symbol(self):
        """Test with only @ symbol"""
        assert is_valid_email("@") == False
    
    def test_edge_case_at_at_beginning(self):
        """Test with @ at the beginning"""
        assert is_valid_email("@example.com") == False
    
    def test_edge_case_at_at_end(self):
        """Test with @ at the end"""
        assert is_valid_email("user@") == False
    
    def test_edge_case_whitespace(self):
        """Test with whitespace in email"""
        assert is_valid_email("user @example.com") == False
    
    def test_edge_case_special_chars(self):
        """Test with special characters"""
        assert is_valid_email("user!#$%@example.com") == True
    
    def test_edge_case_subdomain_test(self):
        """Test subdomain containing 'test'"""
        assert is_valid_email("user@mail.test.com") == True
    
    def test_edge_case_test_in_username(self):
        """Test 'test' in username"""
        assert is_valid_email("testuser@example.com") == True
    
    # Boundary Cases
    def test_boundary_minimum_valid_email(self):
        """Test shortest possible valid email"""
        assert is_valid_email("a@b.c") == True
    
    def test_boundary_long_email(self):
        """Test with very long email"""
        long_email = "a" * 50 + "@" + "b" * 50 + ".com"
        assert is_valid_email(long_email) == True


# Additional parameterized tests
@pytest.mark.parametrize("email,expected", [
    ("valid@email.com", True),
    ("another.valid@email.co.uk", True),
    ("invalid", False),
    ("no-at-sign.com", False),
    ("blocked@test.com", False),
    ("", False),
    ("@", False),
    ("user@", False),
    ("@domain.com", False),
])
def test_email_validation_parameterized(email, expected):
    """Parameterized test for multiple email scenarios"""
    assert is_valid_email(email) == expected